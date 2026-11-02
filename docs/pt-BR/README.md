# Exemplo de CAPTCHA para extensões de navegador

[English](../../README.md) · [简体中文](../zh-CN/README.md) · [日本語](../ja/README.md) · [Español](../es/README.md) · [Português](../pt-BR/README.md) · [한국어](../ko/README.md)

## Introduction

O código de uma extensão pode ser inspecionado, portanto a chave de API não deve ficar no pacote, no armazenamento ou na configuração do cliente. O exemplo limita a extensão a uma página de QA própria e valida a autorização em um serviço local. A integração com [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme) permanece atrás do limite do servidor.

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

Use somente em páginas de QA próprias ou explicitamente autorizadas. Limite destinos, volume, retenção e condições de parada. Interrompa a automação em login, criação de conta, pagamento ou dados privados.

## Conclusion

Esse padrão mantém segredos e chamadas do provedor fora da extensão e facilita a revisão de QA autorizado. [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme).

## Maintainer Note

Developer sharing CapSolver integration examples.

## License

[MIT](../../LICENSE)
