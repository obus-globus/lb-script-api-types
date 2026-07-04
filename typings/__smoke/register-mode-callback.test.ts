// Smoke test - P-02b: `registerMode` / `registerChoice` callbacks receive a
// ScriptMode (the polyglot proxy with the script-mode helpers), not a bare
// `Mode`. PolyglotScript.kt does
// `ScriptMode(modeObject, modeValueGroup).apply { callback.accept(this) }`.
//
// Two-sided assertion (same pattern as register-script-callable):
//   Positive: the callback parameter is assignable to ScriptMode.
//   Negative: a wrong assignment errors - if the narrowing vanishes and the
//             parameter degrades to a bare Mode/any, the @ts-expect-error
//             becomes unused (TS2578) and surfaces as a failure.

import type {} from '../augmentations/index.d.ts';
import type { PolyglotScript } from '../types/net/ccbluex/liquidbounce/script/PolyglotScript.d.ts';
import type { ScriptMode } from '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptMode.d.ts';

declare const script: PolyglotScript;
// The descriptor group, without hard-coding its import path.
declare const group: Parameters<PolyglotScript["registerMode"]>[0];

script.registerMode(group, { name: "TestMode" }, (mode) => {
    const m: ScriptMode = mode; // positive: callback param IS ScriptMode
    void m;
});

script.registerChoice(group, { name: "TestChoice" }, (mode) => {
    // @ts-expect-error TS2322 - ScriptMode is not a string; if the P-02b
    // narrowing is lost (param becomes any), this turns into TS2578.
    const s: string = mode;
    void s;
});
