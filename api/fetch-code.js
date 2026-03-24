const { getLatestVerificationCode } = require('../MailProxy/mail-handler');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method not allowed.' });
    }

    const email = typeof req.query?.email === 'string' ? req.query.email : undefined;

    try {
        const result = await getLatestVerificationCode(email);
        if (result && result.code) {
            return res.json({ success: true, code: result.code, date: result.date });
        }

        return res.status(404).json({
            success: false,
            message: 'No verification code found in recent emails.'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal server error.'
        });
    }
};
