# How to use `cbor-web`

This repo contains code to demonstrate my problem with `cbor-web`.

Use `ng serve` to provide a running web-server with the code.
Open then `http://localhost:4200/` in the browser.
Open the debug console of your browser.

On Chrome I get the following error message:

```
cbor.js:formatted:1 Uncaught ReferenceError: process is not defined
    at Object.push.MCLT.exports.debuglog (cbor.js:formatted:1)
    at Object.481 (cbor.js:formatted:1)
    at o (cbor.js:formatted:1)
    at Object.830 (cbor.js:formatted:1)
    at o (cbor.js:formatted:1)
    at Object.20 (cbor.js:formatted:1)
    at o (cbor.js:formatted:1)
    at Object.141 (cbor.js:formatted:1)
    at o (cbor.js:formatted:1)
    at cbor.js:formatted:1
```