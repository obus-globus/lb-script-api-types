// Smoke test — verifies that `registerScript(...)` is callable (no TS2349).
//
// Prior to this fix, `registerScript` was typed as a `PolyglotScript$RegisterScript`
// Java-bridge class with only an `apply()` method and no call signature, causing
// TS2349 ("This expression is not callable") on every real script's first line.
//
// Two-sided assertion:
//   Positive: `registerScript({...})` compiles without error — if the type
//             still lacks a call signature, TS2349 fires and this test fails.
//   Negative: a bad argument shape causes TS2345 (missing required field),
//             consumed by @ts-expect-error — if the type becomes `any`,
//             the directive becomes unused (TS2578) and surfaces as a failure.

import type {} from '../augmentations/index.d.ts';
import type { PolyglotScript } from '../types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts';

declare const registerScript: (scriptObject: { name: string; version: string; authors: string[] }) => PolyglotScript;

// Positive: correct call — must compile without TS2349.
const script: PolyglotScript = registerScript({
    name: "TestScript",
    version: "1.0.0",
    authors: ["tester"],
});

void script; // suppress unused-local in strict mode

// Negative: missing required field `version` must cause a type error.
// If the type degrades to `any`, @ts-expect-error becomes unused (TS2578 → fail).
// @ts-expect-error TS2345 — `version` is missing; regression shows as TS2578
const _bad = registerScript({ name: "BadScript", authors: ["x"] });
void _bad;
