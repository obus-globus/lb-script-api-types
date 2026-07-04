// Smoke test - verifies T-7: ValueGroup.curve accepts a Kotlin-DSL-style
// receiver lambda where `this` is bound to CurveValue.Builder. Without this,
// callers had to construct a Function1 object with an `invoke` method or
// cast to `any`.

/// <reference path="../ambient/ambient.d.ts" />

import type { ValueGroup } from '../types/net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts';
import type { CurveValue$Builder } from '../types/net/ccbluex/liquidbounce/config/types/CurveValue$Builder.d.ts';

declare const group: ValueGroup;

// --- Positive: receiver-style `function` callback, `this` is typed ---

const _curve = group.curve("myCurve", function () {
    // `this` should be CurveValue$Builder - accessing `.tension` typechecks.
    this.tension = 0.5;
});
void _curve;

// Explicit `this` annotation also works.
group.curve("explicit", function (this: CurveValue$Builder) {
    this.tension = 1.0;
});

// --- Negative: arrow functions can't bind `this`, accessing builder props
// off the implicit `this` should be rejected (arrow `this` is module-scope) ---

group.curve("bad", () => {
    // @ts-expect-error TS2683 - 'this' has type any/global, not CurveValue$Builder
    this.tension = 0.5;
});

// Wrong `this` annotation: call site rejects because the supplied `this`
// type is incompatible with CurveValue$Builder.
// @ts-expect-error TS2345 - 'this' types of each signature are incompatible
group.curve("wrong-this", function (this: { foo: string }) {
    this.foo = "x";
});
