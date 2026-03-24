# UniversalRegKit 通用注册工具箱

这是一个结合了 **油猴脚本 (Tampermonkey)** 与 **Node.js 服务端** 的自动生成注册邮箱与接码解决方案，旨在显著提升网页注册流程的效率。

---

## 📂 项目结构

- **`ClientScript/`**: 油猴脚本目录。包含核心 UI 和页面操纵逻辑。详见 [组件说明](ClientScript/README.md)。
- **`MailProxy/`**: 本地 Node.js 中转服务端。利用 IMAP 协议安全、快速地提取验证码并提供接口。
- **`api/`**: Vercel Serverless Functions 入口，用于一键部署线上接码接口。

---

## 🛠️ 快速上手

### 1. 部署后端 (MailProxy / Vercel)
此部分负责连接您的邮箱并抓取验证码。

#### 方案 A：Vercel 一键部署（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iisyw/UniversalRegKit)

部署时请在 Vercel 中配置以下环境变量：

- `IMAP_HOST`: 邮箱 IMAP 服务器地址（如 `imap.gmail.com`）。
- `IMAP_PORT`: 邮箱 IMAP 端口，通常为 `993`。
- `IMAP_USER`: 邮箱账号。
- `IMAP_PASS`: 邮箱密码或应用专用密码。

部署完成后，接口地址为：

- `https://你的域名/fetch-code?email=xxx`

将这个地址填入油猴脚本的 `Custom API` 配置即可。

#### 方案 B：本地运行 MailProxy
适合继续在本机使用本地接口。

1. 进入目录：`cd MailProxy`
2. 安装依赖：`npm install`
3. 配置环境：将 `.env.example` 重名为 `.env`，填入您的邮箱 IMAP 信息。
4. 启动服务：`npm start`

### 2. 安装前端 (ClientScript)
1. 在油猴插件中新建一个脚本。
2. 将 `ClientScript/index.js` 的内容全选贴入。
3. 保存并在目标注册网页上使用（默认以贴边悬浮标签形式显示在页面右侧）。

---

## ✨ 核心特性

- **多模式生成**：支持邮箱、密码（强密码/纯数字）、昵称的随机生成与一键填充。
- **混合接码方案**：
    - **tempmail.plus**：优秀的第三方临时邮箱支持。
    - **MailProxy (Custom API)**：通过连接您的私人邮箱，实现 100% 成功的接码体验，规避了第三方邮箱被屏蔽的问题。
- **邮件时间游标**：抓取验证码时会记录最后一封已处理邮件的时间，仅接受比该时间更新的邮件，避免重复读取旧码。
- **隐私保护**：所有的私密邮箱连接均在您的本地 Node.js 环境中由您自己完成。

---

## ⚙️ 配置说明

### MailProxy / Vercel
- `IMAP_HOST`: 邮箱 IMAP 服务器地址（如 `imap.gmail.com`）。
- `IMAP_PORT`: IMAP 端口，通常为 `993`。
- `IMAP_USER`: 邮箱账号。
- `IMAP_PASS`: 邮箱密码（或应用授权码）。
- `PORT`: 仅本地运行 `MailProxy/server.js` 时使用，Vercel 部署不需要配置。

### ClientScript (面板设置)
- 点击面板上的 ⚙️ 按钮配置生成模版。
- 点击面板上的 📧 按钮选择接码服务商并配置对应参数。

---

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 协议。

---

## 🚀 开发者
*项目采用 Vibe Coding 方式开发。*
