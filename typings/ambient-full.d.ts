// Full-typing entry: the ambient globals PLUS the complete Java.type string-literal
// registry, in a single reference. With this on, every `Java.type("fully.Qualified.Name")`
// is typed straight from the string — no per-handle casts and no separate registry
// opt-in:
//
//     // tsconfig: "types": ["@wunk/lb-script-api-types/ambient-full"]
//     const Types = Java.type("com.viaversion.viaversion.api.type.Types"); // typed
//
// This pulls the whole registry into the program, so it is heavier to compile than
// the lean `ambient` entry and is intended for non-editor consumers / batch tsc, not
// the lightweight browser editor. Use it with `skipLibCheck` (the norm for a large
// generated declaration set).
/// <reference path="./ambient/ambient.d.ts" />
/// <reference path="./registry-full/index.d.ts" />
export {};
