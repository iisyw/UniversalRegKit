// ==UserScript==
// @name         UniversalRegKit | 通用注册工具箱
// @namespace    https://github.com/iisyw/UniversalRegKit
// @version      3.1
// @description  通用的随机信息生成工具：支持自定义模板、多级密码、历史记录、智能填充，并深度集成私有邮件代理接码功能。
// @author       iisyw
// @match        *://*/*
// @icon         data:image/svg+xml;charset=utf-8;base64,PHN2ZyB0PSIxNzc0MjYzNTc4MjgwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4OTYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNDc2LjE2IDIzNi40NTg2NjdjLTEyLjM3MzMzMyAwLTI0LjQwNTMzMyAwLjkzODY2Ny0zNi4yNjY2NjcgMi43MzA2NjYgMjIuNTI4IDI1LjQyOTMzMyAzNi4yNjY2NjcgNTguNzk0NjY3IDM2LjI2NjY2NyA5NS40ODggMCA3OS40NDUzMzMtNjQuMzQxMzMzIDE0My43ODY2NjctMTQzLjc4NjY2NyAxNDMuNzg2NjY3LTM1LjQ5ODY2NyAwLTY4LjAxMDY2Ny0xMi44ODUzMzMtOTMuMDk4NjY2LTM0LjIxODY2Ny0xLjM2NTMzMyAxMC4yNC0yLjA0OCAyMC42NTA2NjctMi4wNDggMzEuMTQ2NjY3IDAgMTMxLjkyNTMzMyAxMDcuMDA4IDIzOC45MzMzMzMgMjM4LjkzMzMzMyAyMzguOTMzMzMzczIzOC45MzMzMzMtMTA3LjAwOCAyMzguOTMzMzMzLTIzOC45MzMzMzMtMTA3LjAwOC0yMzguOTMzMzMzLTIzOC45MzMzMzMtMjM4LjkzMzMzM3oiIGZpbGw9IiNGRkZCRDkiIHAtaWQ9IjE4OTciPjwvcGF0aD48cGF0aCBkPSJNNDc2LjE2IDcyNC41NjUzMzNjLTY2LjU2IDAtMTI5LjEwOTMzMy0yNS45NDEzMzMtMTc2LjIxMzMzMy03Mi45Ni00Ny4wMTg2NjctNDcuMDE4NjY3LTcyLjk2LTEwOS42NTMzMzMtNzIuOTYtMTc2LjIxMzMzMyAwLTEwLjgzNzMzMyAwLjY4MjY2Ny0yMS43NiAyLjEzMzMzMy0zMi41MTJsMi40NzQ2NjctMTguNjg4IDE0LjMzNiAxMi4yMDI2NjdjMjQuMDY0IDIwLjQ4IDU0Ljc4NCAzMS44MjkzMzMgODYuNTI4IDMxLjgyOTMzMyA3My42NDI2NjcgMCAxMzMuNTQ2NjY3LTU5LjkwNCAxMzMuNTQ2NjY2LTEzMy41NDY2NjcgMC0zMi42ODI2NjctMTEuOTQ2NjY3LTY0LjE3MDY2Ny0zMy43MDY2NjYtODguNjYxMzMzbC0xMi41NDQtMTQuMDggMTguNjAyNjY2LTIuODE2YzEyLjQ1ODY2Ny0xLjg3NzMzMyAyNS4xNzMzMzMtMi44MTYgMzcuODAyNjY3LTIuODE2IDY2LjU2IDAgMTI5LjEwOTMzMyAyNS45NDEzMzMgMTc2LjIxMzMzMyA3Mi45NiA0Ny4xMDQgNDcuMTA0IDcyLjk2IDEwOS42NTMzMzMgNzIuOTYgMTc2LjIxMzMzM3MtMjUuOTQxMzMzIDEyOS4xMDkzMzMtNzIuOTYgMTc2LjIxMzMzNEM2MDUuMjY5MzMzIDY5OC43MDkzMzMgNTQyLjcyIDcyNC41NjUzMzMgNDc2LjE2IDcyNC41NjUzMzN6IG0tMjI4LjM1Mi0yNjEuMTJjLTAuMTcwNjY3IDQuMDEwNjY3LTAuMzQxMzMzIDguMDIxMzMzLTAuMzQxMzMzIDEyLjAzMiAwIDYxLjA5ODY2NyAyMy44MDggMTE4LjUyOCA2Ni45ODY2NjYgMTYxLjcwNjY2NyA0My4xNzg2NjcgNDMuMTc4NjY3IDEwMC42MDggNjYuOTg2NjY3IDE2MS43MDY2NjcgNjYuOTg2NjY3czExOC41MjgtMjMuODA4IDE2MS43MDY2NjctNjYuOTg2NjY3YzQzLjE3ODY2Ny00My4yNjQgNjYuOTg2NjY3LTEwMC42OTMzMzMgNjYuOTg2NjY2LTE2MS43OTJzLTIzLjgwOC0xMTguNTI4LTY2Ljk4NjY2Ni0xNjEuNzA2NjY3QzU5NC42ODggMjcwLjUwNjY2NyA1MzcuMjU4NjY3IDI0Ni42OTg2NjcgNDc2LjE2IDI0Ni42OTg2NjdjLTUuNjMyIDAtMTEuMjY0IDAuMTcwNjY3LTE2Ljg5NiAwLjU5NzMzMyAxNy41Nzg2NjcgMjUuNiAyNy4xMzYgNTUuOTc4NjY3IDI3LjEzNiA4Ny4zODEzMzMgMCA4NC45MDY2NjctNjkuMTIgMTU0LjAyNjY2Ny0xNTQuMDI2NjY3IDE1NC4wMjY2NjctMzAuMjA4IDAtNTkuNTYyNjY3LTguODc0NjY3LTg0LjU2NTMzMy0yNS4yNTg2Njd6IiBmaWxsPSIjN0Q3RDdEIiBwLWlkPSIxODk4Ij48L3BhdGg+PC9zdmc+
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const STORAGE_KEY = 'universal_gen_state';
    const CONFIG_KEY = 'universal_gen_config';
    const HISTORY_KEY = 'universal_gen_history';

    // 状态与配置
    const state = { email: '', password: '', nickname: '', lastCode: '', lastEmailTime: 0 };
    const config = { 
        emailTemplate: 'user_{d}{d}{d}@example.com', 
        passwordType: 'strong', // strong, simple, digits
        mailProvider: 'tempmail.plus',
        providerConfigs: {
            'tempmail.plus': { prefix: '', suffix: '@mailto.plus', pin: '' },
            'custom': { apiUrl: 'http://localhost:3000/fetch-code' }
        }
    };
    let history = [];

    function loadAll() {
        try {
            const savedState = JSON.parse(GM_getValue(STORAGE_KEY, '{}'));
            const savedConfig = JSON.parse(GM_getValue(CONFIG_KEY, '{}'));
            Object.assign(state, savedState);
            Object.assign(config, savedConfig);
            history = JSON.parse(GM_getValue(HISTORY_KEY, '[]'));
            if (!state.email) refreshAll(false);
        } catch (e) {
            refreshAll(false);
        }
    }

    const HISTORY_LIMIT = 10;

    function saveAll() {
        GM_setValue(STORAGE_KEY, JSON.stringify(state));
        GM_setValue(CONFIG_KEY, JSON.stringify(config));
        GM_setValue(HISTORY_KEY, JSON.stringify(history.slice(0, HISTORY_LIMIT)));
    }

    // 生成逻辑
    const generators = {
        email: () => {
            let res = config.emailTemplate;
            res = res.replace(/\{d\}/g, () => Math.floor(Math.random() * 10));
            res = res.replace(/\{s\}/g, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)));
            return res;
        },
        password: () => {
            let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            if (config.passwordType === 'strong') chars += '!@#$%^&*';
            if (config.passwordType === 'digits') chars = '0123456789';
            const len = config.passwordType === 'digits' ? 6 : 12;
            return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        },
        nickname: () => {
            const firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'George', 'Melissa', 'Timothy', 'Deborah'];
            const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts'];
            return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(lastNames.length * Math.random())]}`;
        }
    };

    // 验证码获取逻辑
    const mailProviders = {
        'tempmail.plus': async () => {
            const cfg = config.providerConfigs['tempmail.plus'];
            const mailListUrl = `https://tempmail.plus/api/mails?email=${cfg.prefix}${cfg.suffix}&limit=5&epin=${cfg.pin}`;
            const response = await apiRequest(mailListUrl);
            if (response.result && response.first_id) {
                const detailUrl = `https://tempmail.plus/api/mails/${response.first_id}?email=${cfg.prefix}${cfg.suffix}&epin=${cfg.pin}`;
                const mail = await apiRequest(detailUrl);
                return { text: mail.text || '', date: new Date(mail.date).getTime() };
            }
            return null;
        },
        'custom': async () => {
            const cfg = config.providerConfigs['custom'];
            const url = `${cfg.apiUrl}${cfg.apiUrl.includes('?') ? '&' : '?'}email=${state.email}`;
            const res = await apiRequest(url);
            return { text: res.code, date: new Date(res.date).getTime() };
        }
    };

    function apiRequest(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: url,
                onload: (res) => res.status === 200 ? resolve(JSON.parse(res.responseText)) : reject(res),
                onerror: reject
            });
        });
    }

    async function fetchVerificationCode(btn) {
        const providerName = config.mailProvider || 'tempmail.plus';
        const cfg = config.providerConfigs[providerName];
        if (providerName !== 'custom' && !cfg.prefix) {
            alert('请先在面板设置中配置接码邮箱前缀/登录名！');
            return;
        }
        const oldText = btn.textContent;
        const MAX_RETRIES = 5;
        const RETRY_DELAY = 2000;
        
        btn.disabled = true;

        for (let i = 0; i < MAX_RETRIES; i++) {
            btn.textContent = `⏳ 获取中...(${i+1}/${MAX_RETRIES})`;
            try {
                const provider = mailProviders[config.mailProvider || 'tempmail.plus'];
                const result = await provider();
                
                if (result && result.text) {
                    // 时间校验：邮件时间必须晚于邮箱刷新时间
                    if (state.lastEmailTime && result.date < state.lastEmailTime) {
                         console.log(`[接码] 检测到旧邮件 (邮件时间: ${new Date(result.date).toLocaleTimeString()}, 刷新时间: ${new Date(state.lastEmailTime).toLocaleTimeString()}), 继续等待...`);
                    } else {
                        const codeMatch = result.text.match(/\d{6}/); 
                        if (codeMatch) {
                            state.lastCode = codeMatch[0];
                            updateUI();
                            saveAll();
                            
                            // 改为自动复制
                            navigator.clipboard.writeText(state.lastCode).then(() => {
                                btn.textContent = '📋 已复制';
                                setTimeout(() => {
                                    btn.textContent = oldText;
                                    btn.disabled = false;
                                }, 3000);
                            });
                            return;
                        }
                    }
                }
            } catch (e) {
                console.error('Fetch code error:', e);
            }
            if (i < MAX_RETRIES - 1) await new Promise(r => setTimeout(r, RETRY_DELAY));
        }

        btn.textContent = '❌ 未见新码';
        setTimeout(() => {
            btn.textContent = oldText;
            btn.disabled = false;
        }, 2000);
    }

    function refreshAll(pushHistory = true) {
        if (pushHistory && state.email) {
            history.unshift({ ...state, time: new Date().toLocaleTimeString() });
            history = history.slice(0, HISTORY_LIMIT);
        }
        state.email = generators.email();
        state.password = generators.password();
        state.nickname = generators.nickname();
        state.lastCode = '';
        state.lastEmailTime = Date.now(); // 记录刷新时间
        saveAll();
        updateUI();
        if (historyPanel && historyPanel.style.display === 'block') renderHistory();
    }

    function refreshSingle(id) {
        state[id] = generators[id]();
        if (id === 'email') state.lastEmailTime = Date.now(); // 记录刷新时间
        saveAll();
        updateUI();
    }

    function useHistory(item) {
        Object.assign(state, { email: item.email, password: item.password, nickname: item.nickname });
        saveAll();
        updateUI();
    }

    // 模拟输入
    function simulateInput(value, type) {
        let target = document.activeElement;
        if (!target || !['INPUT', 'TEXTAREA'].includes(target.tagName)) {
            const selectors = {
                email: 'input[type="email"], input[name*="email"]',
                password: 'input[type="password"], input[name*="password"]',
                text: 'input[id$="-name"], input[name="name"], input[name*="nick"], input[name*="user"], input[name*="name"], input[placeholder*="名"], input[placeholder*="Name"]'
            };
            target = document.querySelector(selectors[type] || selectors.text);
        }

        if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
            target.focus();
            try {
                target.select();
                document.execCommand('insertText', false, value);
            } catch (e) { target.value = value; }
            
            ['input', 'change', 'blur'].forEach(evt => target.dispatchEvent(new Event(evt, { bubbles: true })));
            const setter = Object.getOwnPropertyDescriptor(target.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, "value").set;
            if (setter) { setter.call(target, value); target.dispatchEvent(new Event('input', { bubbles: true })); }
        } else {
            alert('未找到合适的输入框，请先点击页面上的目标输入框。');
        }
    }

    function copyToClipboard(text, btn) {
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
            const old = btn.textContent;
            btn.textContent = '✅';
            setTimeout(() => btn.textContent = old, 1000);
        });
    }

    // UI 构建
    let mainContainer, contentPanel, settingsPanel, historyPanel, emailPanel, titleEl;

    function updateUI() {
        if (!mainContainer) return;
        document.getElementById('gen-val-email').textContent = state.email || '尚未生成';
        document.getElementById('gen-val-password').textContent = state.password || '尚未生成';
        document.getElementById('gen-val-nickname').textContent = state.nickname || '尚未生成';
        const codeEl = document.getElementById('gen-val-lastCode');
        if (codeEl) codeEl.textContent = state.lastCode || '📩 待获取';
    }

    function renderHistory() {
        if (!historyPanel) return;
        historyPanel.innerHTML = '<div style="font-weight:bold;margin-bottom:8px;font-size:12px;color:#333;border-bottom:1px solid #eee;padding-bottom:4px;">最近记录</div>';
        if (history.length === 0) {
            historyPanel.innerHTML += '<div style="color:#999;font-size:11px;padding:10px 0;text-align:center;">暂无记录</div>';
        }
        history.forEach((item, index) => {
            const div = document.createElement('div');
            div.style.cssText = 'padding:8px; border-bottom:1px solid #f0f0f0; cursor:pointer; font-size:11px; color:#666; transition:background 0.2s;';
            div.onmouseover = () => div.style.background = '#f5f5f5';
            div.onmouseout = () => div.style.background = 'transparent';
            div.innerHTML = `<div style="display:flex;justify-content:space-between;margin-bottom:2px;"><span style="color:#10a37f;font-weight:bold;">#${index+1}</span><span style="color:#ccc;">${item.time}</span></div><div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px;">${item.email}</div>`;
            div.onclick = () => { useHistory(item); historyPanel.style.display = 'none'; };
            historyPanel.appendChild(div);
        });
    }

    function initUI() {
        if (document.getElementById('gen-ui-container')) return;
        loadAll();

        mainContainer = document.createElement('div');
        mainContainer.id = 'gen-ui-container';
        mainContainer.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:2147483647; background:#fff; border:1px solid #ddd; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.15); font-family:-apple-system,system-ui,sans-serif; width:260px; padding:12px; user-select:none; display:flex; flex-direction:column; gap:10px;';

        const header = document.createElement('div');
        header.style.cssText = 'display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:8px;';
        
        titleEl = document.createElement('span');
        titleEl.textContent = '生成助手';
        titleEl.style.cssText = 'font-size:13px; font-weight:bold; color:#333;';
        
        const btnGroup = document.createElement('div');
        btnGroup.style.cssText = 'display:flex; gap:8px; align-items:center;';

        const switchPanel = (panelName) => {
            [historyPanel, emailPanel, settingsPanel].forEach(p => p.style.display = 'none');
            if (panelName) panelName.style.display = 'block';
        };

        const historyBtn = document.createElement('button');
        historyBtn.innerHTML = '📜';
        historyBtn.title = '历史记录';
        historyBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:14px;padding:0;';
        historyBtn.onclick = () => { 
            const isHidden = historyPanel.style.display === 'none';
            switchPanel(isHidden ? historyPanel : null);
            if (isHidden) renderHistory();
        };

        const emailConfigBtn = document.createElement('button');
        emailConfigBtn.innerHTML = '📧';
        emailConfigBtn.title = '接码配置';
        emailConfigBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:14px;padding:0;';
        emailConfigBtn.onclick = () => switchPanel(emailPanel.style.display === 'none' ? emailPanel : null);

        const configBtn = document.createElement('button');
        configBtn.innerHTML = '⚙️';
        configBtn.title = '基础配置';
        configBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:14px;padding:0;';
        configBtn.onclick = () => switchPanel(settingsPanel.style.display === 'none' ? settingsPanel : null);

        const toggleBtn = document.createElement('button');
        toggleBtn.innerHTML = '&#8211;';
        toggleBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:16px;color:#999;padding:0;';

        btnGroup.append(historyBtn, emailConfigBtn, configBtn, toggleBtn);
        header.append(titleEl, btnGroup);
        mainContainer.appendChild(header);

        // 基础设置面板
        settingsPanel = document.createElement('div');
        settingsPanel.style.cssText = 'display:none; padding:10px; background:#f9f9f9; border-radius:8px; font-size:11px;';
        settingsPanel.innerHTML = `
            <div style="font-weight:bold; margin-bottom:10px; color:#333; border-bottom:1px solid #ddd; padding-bottom:5px;">随机生成配置</div>
            <div style="margin-bottom:6px; color:#666;">邮箱模板 ({d}:数字, {s}:字符):</div>
            <input id="gen-cfg-email" type="text" style="width:100%; padding:4px; margin-bottom:10px; border:1px solid #ccc; border-radius:4px; font-size:11px;" value="${config.emailTemplate}">
            <div style="margin-bottom:6px; color:#666;">密码类型:</div>
            <select id="gen-cfg-pwd" style="width:100%; padding:4px; border:1px solid #ccc; border-radius:4px; font-size:11px; margin-bottom:10px;">
                <option value="strong" ${config.passwordType==='strong'?'selected':''}>强密码 (符号)</option>
                <option value="simple" ${config.passwordType==='simple'?'selected':''}>普通 (字母数字)</option>
                <option value="digits" ${config.passwordType==='digits'?'selected':''}>纯数字 (6位)</option>
            </select>
            <button id="gen-cfg-save" style="margin-top:10px; width:100%; padding:6px; background:#10a37f; color:#fff; border:none; border-radius:4px; cursor:pointer; font-size:11px;">保存配置</button>
        `;
        mainContainer.appendChild(settingsPanel);
        settingsPanel.querySelector('#gen-cfg-save').onclick = () => {
            config.emailTemplate = document.getElementById('gen-cfg-email').value;
            config.passwordType = document.getElementById('gen-cfg-pwd').value;
            saveAll();
            settingsPanel.style.display = 'none';
        };

        // 接码配置面板
        emailPanel = document.createElement('div');
        emailPanel.style.cssText = 'display:none; padding:10px; background:#f9f9f9; border-radius:8px; font-size:11px;';

        const renderEmailPanel = () => {
            const provider = config.mailProvider || 'tempmail.plus';
            const isTempMail = provider === 'tempmail.plus';
            const is1SecMail = provider === '1secmail';
            const isCustom = provider === 'custom';

            emailPanel.innerHTML = `
                <div style="font-weight:bold; margin-bottom:10px; color:#333; border-bottom:1px solid #ddd; padding-bottom:5px;">接码配置</div>
                <div style="margin-bottom:6px; color:#666;">服务商:</div>
                <select id="gen-cfg-mail-prov" style="width:100%; padding:4px; border:1px solid #ccc; border-radius:4px; font-size:11px; margin-bottom:10px;">
                    <option value="tempmail.plus" ${isTempMail?'selected':''}>tempmail.plus (推荐 稳定)</option>
                    <option value="custom" ${isCustom?'selected':''}>Custom API (本地 MailProxy)</option>
                </select>

                <div id="gen-prov-fields">
                    ${isCustom ? `
                        <div style="margin-bottom:6px; color:#666;">API URL:</div>
                        <input id="gen-cfg-cust-url" type="text" style="width:100%; padding:4px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px; font-size:11px;" value="${config.providerConfigs.custom.apiUrl}" placeholder="http://localhost:3000/fetch-code">
                    ` : `
                        <div style="margin-bottom:6px; color:#666;">${isTempMail?'邮箱前缀:':'登录名:'}</div>
                        <input id="gen-cfg-tmp-pre" type="text" style="width:100%; padding:4px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px; font-size:11px;" value="${config.providerConfigs[provider].prefix||''}" placeholder="例如: myname">
                        
                        <div style="margin-bottom:6px; color:#666;">邮箱后缀:</div>
                        <input id="gen-cfg-tmp-suf" type="text" style="width:100%; padding:4px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px; font-size:11px;" value="${config.providerConfigs[provider].suffix||'@mailto.plus'}">

                        ${isTempMail ? `
                            <div style="margin-bottom:6px; color:#666;">PIN 码 (可选):</div>
                            <input id="gen-cfg-tmp-pin" type="text" style="width:100%; padding:4px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px; font-size:11px;" value="${config.providerConfigs[provider].pin||''}" placeholder="epin">
                        ` : ''}
                    `}
                </div>
                
                <button id="gen-cfg-save-tmp" style="margin-top:10px; width:100%; padding:6px; background:#10a37f; color:#fff; border:none; border-radius:4px; cursor:pointer; font-size:11px;">保存并关闭</button>
            `;

            emailPanel.querySelector('#gen-cfg-mail-prov').onchange = (e) => {
                config.mailProvider = e.target.value;
                renderEmailPanel();
            };

            emailPanel.querySelector('#gen-cfg-save-tmp').onclick = () => {
                const c = config.providerConfigs[provider];
                if (isCustom) {
                    c.apiUrl = document.getElementById('gen-cfg-cust-url').value;
                } else {
                    c.prefix = document.getElementById('gen-cfg-tmp-pre').value;
                    c.suffix = document.getElementById('gen-cfg-tmp-suf').value;
                    if (isTempMail) c.pin = document.getElementById('gen-cfg-tmp-pin').value;
                }
                saveAll();
                emailPanel.style.display = 'none';
            };
        };
        renderEmailPanel();
        mainContainer.appendChild(emailPanel);

        // 历史面板
        historyPanel = document.createElement('div');
        historyPanel.id = 'gen-ui-history';
        historyPanel.style.cssText = 'display:none; padding:10px; background:#f9f9f9; border-radius:8px; max-height:200px; overflow-y:auto;';
        mainContainer.appendChild(historyPanel);

        // 主内容面板
        contentPanel = document.createElement('div');
        contentPanel.style.cssText = 'display:flex; flex-direction:column; gap:8px;';

        const refreshAllBtn = document.createElement('button');
        refreshAllBtn.textContent = '🔄 全部随机重置';
        refreshAllBtn.style.cssText = 'padding:8px; background:#10a37f; color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:500;';
        refreshAllBtn.onclick = () => refreshAll(true);
        contentPanel.appendChild(refreshAllBtn);

        const createRow = (id, type) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:grid; grid-template-columns: 1fr auto auto auto; gap:4px; align-items:center; font-size:12px;';
            const valSpan = document.createElement('span');
            valSpan.id = `gen-val-${id}`;
            valSpan.style.cssText = 'background:#f5f5f5; padding:4px 6px; border-radius:4px; color:#555; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;';
            valSpan.textContent = state[id] || (id === 'lastCode' ? '📩 待获取' : '尚未生成');
            
            const btnGroup = document.createElement('div');
            btnGroup.style.cssText = 'display:flex; gap:2px;';

            if (id === 'lastCode') {
                const fetchBtn = document.createElement('button');
                fetchBtn.textContent = '📩'; fetchBtn.title = '获取验证码'; fetchBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:13px;padding:2px;';
                fetchBtn.onclick = () => fetchVerificationCode(fetchBtn);
                const copyBtn = document.createElement('button');
                copyBtn.textContent = '📋'; copyBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:13px;padding:2px;';
                copyBtn.onclick = () => copyToClipboard(state[id], copyBtn);
                const fillBtn = document.createElement('button');
                fillBtn.textContent = '➡️'; fillBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:13px;padding:2px;';
                fillBtn.onclick = () => simulateInput(state[id], 'text');
                row.append(valSpan, fetchBtn, copyBtn, fillBtn);
            } else {
                const randBtn = document.createElement('button'); randBtn.textContent = '🎲'; randBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:13px;padding:2px;';
                randBtn.onclick = () => refreshSingle(id);
                const copyBtn = document.createElement('button'); copyBtn.textContent = '📋'; copyBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:13px;padding:2px;';
                copyBtn.onclick = () => copyToClipboard(state[id], copyBtn);
                const fillBtn = document.createElement('button');
                fillBtn.textContent = '➡️'; fillBtn.style.cssText = 'border:none;background:none;cursor:pointer;font-size:13px;padding:2px;';
                fillBtn.onclick = () => simulateInput(state[id], type);
                row.append(valSpan, randBtn, copyBtn, fillBtn);
            }
            return row;
        };

        contentPanel.appendChild(createRow('email', 'email'));
        contentPanel.appendChild(createRow('password', 'password'));
        contentPanel.appendChild(createRow('nickname', 'text'));
        contentPanel.appendChild(createRow('lastCode', 'text'));
        mainContainer.appendChild(contentPanel);

        // 折叠逻辑 (优化居中)
        let isCollapsed = true;
        const applyCollapse = (collapsed) => {
            contentPanel.style.display = collapsed ? 'none' : 'flex';
            settingsPanel.style.display = historyPanel.style.display = emailPanel.style.display = 'none';
            titleEl.style.display = collapsed ? 'none' : 'block';
            historyBtn.style.display = emailConfigBtn.style.display = configBtn.style.display = collapsed ? 'none' : 'block';
            header.style.borderBottom = collapsed ? 'none' : '1px solid #eee';
            header.style.paddingBottom = collapsed ? '0' : '8px';
            header.style.justifyContent = collapsed ? 'center' : 'space-between';
            toggleBtn.innerHTML = collapsed ? '🛠️' : '&#8211;';
            mainContainer.style.width = collapsed ? '42px' : '260px';
            mainContainer.style.height = collapsed ? '42px' : 'auto';
            mainContainer.style.padding = collapsed ? '0' : '12px';
            mainContainer.style.borderRadius = collapsed ? '50%' : '12px';
            mainContainer.style.justifyContent = collapsed ? 'center' : 'initial';
            mainContainer.style.alignItems = collapsed ? 'center' : 'initial';
            toggleBtn.style.fontSize = collapsed ? '22px' : '16px';
            toggleBtn.style.width = collapsed ? '100%' : 'auto';
            toggleBtn.style.height = collapsed ? '100%' : 'auto';
            toggleBtn.style.display = 'flex';
            toggleBtn.style.alignItems = 'center';
            toggleBtn.style.justifyContent = 'center';
        };
        applyCollapse(isCollapsed);
        toggleBtn.onclick = () => { isCollapsed = !isCollapsed; applyCollapse(isCollapsed); };
        document.body.appendChild(mainContainer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUI);
    } else {
        initUI();
    }

    // 处理 SPA
    const observer = new MutationObserver(() => {
        if (!document.getElementById('gen-ui-container')) initUI();
    });
    observer.observe(document.body, { childList: true, subtree: true });

})();
