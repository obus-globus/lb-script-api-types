# typing-verify - runtime verification example

A complete LiquidBounce script that doubles as the runtime test of
`@wunk/lb-script-api-types`: it typechecks with a strict stock consumer
config, and at load time prints one `OK`/`FAIL` line per typed surface
(localStorage facade, `.static` class bindings, `Java.type` access,
Setting factories, typed event payloads).

```bash
npm install && npm run build        # -> dist/TypingVerify.mjs
# copy into <client>/LiquidBounce/scripts/ and boot LB; grep the log
# for [TypingVerify]
```

Verified 2026-06-10 against LB b759cac57 (headless): all probes OK, script
hot-reloads cleanly via `.script reload`.
