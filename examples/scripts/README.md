# Example scripts

Runnable LiquidBounce GraalJS userscripts that build against these types. Drop a
`.js` file into your LiquidBounce `scripts/` folder and load it (ClickGUI ->
Scripts, or restart), then use it in-game.

These are real userscripts, not a TypeScript project - they run as plain JS under
LiquidBounce's GraalJS runtime. The types in this package are what give you
autocomplete and hover docs while editing them (point your editor's JS language
service at `@wunk/lb-script-api-types/ambient` via a `jsconfig.json`).

## Scripts

- **`hud-inject.js`** - registers a custom component into the HUD editor at
  runtime (no client patch): open ClickGUI -> HUD Editor -> Add Component and
  you'll find `ScriptHud`, draggable and removable like any built-in element.

  Advanced. It reaches the theme's component catalog through `ReflectionUtil`
  (the script-API reflection binding) because there is no public script API for
  registering HUD components, and it draws itself in `overlayRender` since a
  script-registered component has no theme element to render through. It reflects
  two **private** theme fields (`componentFactories`, `componentSettings`), so it
  depends on LiquidBounce internals that carry no stability guarantee and may
  break on a future refactor. Verified on LiquidBounce nextgen 0.38.1 (MC 26.2).
