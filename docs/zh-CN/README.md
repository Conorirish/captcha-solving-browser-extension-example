# 浏览器扩展 CAPTCHA 处理示例

[English](../../README.md) · [简体中文](../zh-CN/README.md) · [日本語](../ja/README.md) · [Español](../es/README.md) · [Português](../pt-BR/README.md) · [한국어](../ko/README.md)

## Introduction

浏览器扩展代码可被检查，因此不应在扩展包、扩展存储或前端配置中保存 API Key。本示例将扩展限制在自有 QA 页面，并由本地 companion service 校验授权引用和目标来源。[CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme) 集成始终位于服务端边界之后。

## Quick Start

```bash
npm test
npm run smoke
node src/server.mjs
```

## Architecture

```text
owned QA page → Manifest V3 extension → localhost companion → provider adapter
```

## Responsible Use

仅用于自有或已获得明确授权的 QA 页面。限制目标、请求数量、数据保留时间和停止条件；涉及登录、账户创建、支付或非公开数据时，应停止自动执行。

## Conclusion

该结构把密钥和服务端调用保留在扩展之外，适合经过授权的 QA 流程。 [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme).

## Maintainer Note

Developer sharing CapSolver integration examples.

## License

[MIT](../../LICENSE)
