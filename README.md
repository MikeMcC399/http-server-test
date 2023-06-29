# Cypress issue [25950](https://github.com/cypress-io/cypress/issues/25950)

This is for issue https://github.com/cypress-io/cypress/issues/25950.

### Current behavior

Cypress crashes if a literal IPv6 URL is used as parameter for `cy.visit`, for example:

```js
cy.visit('http://[::1]:3000')
```

causes:

```text
Invalid URL
TypeError [ERR_INVALID_URL]: Invalid URL
    at new NodeError (node:internal/errors:372:5)
    at URL.onParseError (node:internal/url:553:9)
    at new URL (node:internal/url:629:5)
    at Object.q (<embedded>:4805:38028)
    at _.get (<embedded>:5213:71723)
    at _.set (<embedded>:5213:73007)
    at <embedded>:5226:8345
    at <embedded>:4805:38908
    at m.<anonymous> (<embedded>:2781:13724)
    at m.emit (node:events:539:35)
    at T (<embedded>:2216:61720)
    at w (<embedded>:2216:60611)
    at process.processTicksAndRejections (node:internal/process/task_queues:85:21)
```

If the test is being run in the Cypress app (`npx cypress open`) then the app crashes.

### Desired behavior

1. Cypress should not crash
2. Cypress should accept URLs with IPv6 literals according to [RFC3986: URI Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986) in `cy.visit`. They do not cause a problem in `cy.request`.

### Test code to reproduce

```js
cy.visit('http://[::1]:3000')
```

Repository to reproduce:

clone https://github.com/MikeMcC399/http-server-test

```base
npm ci
npm test
```

### Cypress Version

12.7.0 => 12.16.0

### Node version

18.14.2 => 18.16.1

### Operating System

Ubuntu 22.04

### Debug Logs

[crash_issue_25950.log](https://github.com/cypress-io/cypress/files/10831751/crash_issue_25950.log)

### Related issues

- https://github.com/cypress-io/cypress/issues/24714
