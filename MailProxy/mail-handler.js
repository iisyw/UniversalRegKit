require('dotenv').config();
const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');

async function getLatestVerificationCode(targetEmail) {
    const client = new ImapFlow({
        host: process.env.IMAP_HOST,
        port: parseInt(process.env.IMAP_PORT) || 993,
        secure: true,
        auth: {
            user: process.env.IMAP_USER,
            pass: process.env.IMAP_PASS
        },
        logger: false
    });

    try {
        await client.connect();
        let result = null;
        const lock = await client.getMailboxLock('INBOX');
        try {
            // 搜索最近的邮件 (按时间倒序)
            // 如果提供了 targetEmail，可以过滤收件人，但通常 catch-all 转发后收件人会变
            // 这里我们采取更通用的策略：找最近 5 封，看正文有没有 6 位数字
            const messages = await client.search({ seen: false }, { sort: ['date', 'desc'] });
            
            if (messages.length === 0) {
                // 如果没有未读，就找最近的 3 封
                const allMessages = await client.fetch('1:*', { uid: true }, { sort: ['date', 'desc'] });
                // ImapFlow 的 fetch 比较复杂，我们简单点：直接拿 UID 最大的几个
            }

            // 简化逻辑：直接获取最近一封邮件的正文和时间
            let lastMessage = await client.fetchOne('*', { source: true, internalDate: true });
            if (lastMessage) {
                const parsed = await simpleParser(lastMessage.source);
                const text = parsed.text || '';
                const codeMatch = text.match(/\d{6}/);
                if (codeMatch) {
                    result = { code: codeMatch[0], date: lastMessage.internalDate };
                }
            }
        } finally {
            lock.release();
        }
        return result;
    } catch (err) {
        console.error('IMAP Error:', err);
        throw err;
    } finally {
        if (client.usable) {
            await client.logout();
        }
    }
}

module.exports = { getLatestVerificationCode };
