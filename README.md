Cypress issue https://github.com/cypress-io/cypress/issues/34143

### Current behavior

Cypress crashes if a literal IPv6 URL is used as parameter for `cy.visit`, for example:

```js
cy.visit('http://[::1]:3000')
```

causes:

```Console
Internal error while proxying "GET http://[::1]:3000/" in ClearCyInitialCookie:
option domain is invalid
TypeError: Internal error while proxying "GET http://[::1]:3000/" in ClearCyInitialCookie:
```


### Desired behavior

1. Cypress should not crash
2. Cypress should accept URLs with IPv6 literals according to [RFC3986: URI Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986) in `cy.visit`. They do not cause a problem in `cy.request`.

### Test code to reproduce

```js
cy.visit('http://[::1]:3000')
```

Repository to reproduce:

https://github.com/MikeMcC399/http-server-test

```shell
git clone https://github.com/MikeMcC399/http-server-test
cd http-server-test
npm ci
npm test
```


### Cypress Version

`15.17.0`

### Debug Logs

```shell

```

### Other

Regression from cypress@15.16.0
