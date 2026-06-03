import type { Object } from '../../java/lang/Object.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
export class LongSaturatedMathKt extends Object {
    static isSaturated(paramarg0: number): boolean;
// (invalid TS: name contains '-')     static saturatingAdd-NuflL3o(paramarg0: number, paramarg1: DurationUnit, paramarg2: number): number;
    static saturatingDiff(paramarg0: number, paramarg1: number, paramarg2: DurationUnit): number;
    static saturatingOriginsDiff(paramarg0: number, paramarg1: number, paramarg2: DurationUnit): number;
}