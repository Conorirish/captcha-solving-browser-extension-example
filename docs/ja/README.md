# ブラウザー拡張の CAPTCHA 処理例

[English](../../README.md) · [简体中文](../zh-CN/README.md) · [日本語](../ja/README.md) · [Español](../es/README.md) · [Português](../pt-BR/README.md) · [한국어](../ko/README.md)

## Introduction

ブラウザー拡張のコードは検査できるため、API キーを拡張パッケージやストレージに保存しないでください。この例では所有する QA ページだけを対象にし、ローカル companion service が認可参照と対象オリジンを検証します。[CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme) との接続は常にサーバー側の境界内に置きます。

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

所有している、または明示的な許可を得た QA ページだけで使用してください。対象、要求回数、保持期間、停止条件を制限し、ログイン、アカウント作成、決済、非公開データが含まれる場合は自動処理を停止してください。

## Conclusion

この構成は秘密情報とサーバー側呼び出しを拡張機能の外に保ち、認可済み QA に適しています。 [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme).

## Maintainer Note

Developer sharing CapSolver integration examples.

## License

[MIT](../../LICENSE)
