require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getLatestVerificationCode } = require('./mail-handler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 简单的健康检查
app.get('/', (req, res) => {
    res.send('MailProxy is running.');
});

// 获取最新验证码接口
// GET /fetch-code?email=xxx
app.get('/fetch-code', async (req, res) => {
    const { email } = req.query;
    console.log(`[${new Date().toLocaleTimeString()}] Fetching code for: ${email || 'any'}`);
    
    try {
        const result = await getLatestVerificationCode(email);
        if (result && result.code) {
            res.json({ success: true, code: result.code, date: result.date });
        } else {
            res.status(404).json({ success: false, message: 'No verification code found in recent emails.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`MailProxy server is running on http://localhost:${PORT}`);
    console.log(`Endpoints:`);
    console.log(`  - GET /fetch-code?email=xxx`);
    console.log(`========================================`);
});
