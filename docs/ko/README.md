# 브라우저 확장 CAPTCHA 처리 예제

[English](../../README.md) · [简体中文](../zh-CN/README.md) · [日本語](../ja/README.md) · [Español](../es/README.md) · [Português](../pt-BR/README.md) · [한국어](../ko/README.md)

## Introduction

브라우저 확장 코드는 검사할 수 있으므로 API 키를 확장 번들, 저장소 또는 클라이언트 설정에 넣으면 안 됩니다. 이 예제는 소유한 QA 페이지만 허용하고 로컬 companion service에서 승인 참조와 대상 출처를 검증합니다. [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme) 연결은 서버 측 경계 뒤에 유지됩니다.

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

소유하거나 명시적으로 승인받은 QA 페이지에서만 사용하세요. 대상, 요청 수, 보존 기간과 중단 조건을 제한하고 로그인, 계정 생성, 결제 또는 비공개 데이터가 포함되면 자동 실행을 중단하세요.

## Conclusion

이 구조는 비밀값과 공급자 호출을 확장 외부에 두어 승인된 QA 검토를 쉽게 만듭니다. [CapSolver](https://www.capsolver.com/?utm_source=github&utm_medium=referral&utm_campaign=captcha-solving-browser-extension-example&utm_content=repository-readme).

## Maintainer Note

Developer sharing CapSolver integration examples.

## License

[MIT](../../LICENSE)
