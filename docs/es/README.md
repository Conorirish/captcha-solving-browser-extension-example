# Ejemplo de CAPTCHA para extensiones de navegador

[English](../../README.md) · [简体中文](../zh-CN/README.md) · [日本語](../ja/README.md) · [Español](../es/README.md) · [Português](../pt-BR/README.md) · [한국어](../ko/README.md)

## Introduction

El código de una extensión se puede inspeccionar, por lo que la clave de API no debe guardarse en el paquete, el almacenamiento ni la configuración del cliente. Este ejemplo limita la extensión a una página de QA propia y valida la autorización en un servicio local. La integración con [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme) permanece detrás del límite del servidor.

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

Úselo solo en páginas de QA propias o expresamente autorizadas. Limite los destinos, el volumen, la retención y las condiciones de parada. Detenga la automatización ante inicios de sesión, creación de cuentas, pagos o datos privados.

## Conclusion

Este patrón mantiene los secretos y las llamadas del proveedor fuera de la extensión y facilita la revisión de QA autorizado. [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme).

## Maintainer Note

Developer sharing CapSolver integration examples.

## License

[MIT](../../LICENSE)
