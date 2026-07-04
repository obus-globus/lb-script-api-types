// Phase 5.3.1 smoke test - verifies IntRange no longer collapses to
// `(Object | null)[]` in the generated ScriptSetting types.
//
// Two-sided assertion: if the predefinedMappings fix were absent, intRange()
// would return RangedValue<(Object | null)[]> and the struct field access
// `start`/`endInclusive`/`step` would cause TS2339 errors that are NOT
// wrapped in @ts-expect-error, causing the smoke to fail.
// If the fix regresses, the @ts-expect-error below would stop consuming
// a real error (TS2578 surfacing) - also a failure.

import type {} from '../augmentations/index.d.ts';
import type { ScriptSetting } from '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptSetting.d.ts';

declare const ss: ScriptSetting;

// Positive #1: field access on the struct result compiles (no TS2339).
// If intRange() still returns RangedValue<(Object | null)[]>, these would
// fail with "Property 'start' does not exist on type '(Object | null)[]'".
const ir = ss.intRange({ name: 'test', default: [0, 10], range: [0, 10] });
const v = ir.get();
const _start: number = v.start;
const _end: number = v.endInclusive;
const _step: number = v.step;

// Negative: `length` is a property of an array but NOT of the struct shape.
// This @ts-expect-error would become unused (TS2578) if we regress to the
// array type - that's the regression detection signal.
// @ts-expect-error TS2339 - `length` is not a property of the struct
const _bad = v.length;

