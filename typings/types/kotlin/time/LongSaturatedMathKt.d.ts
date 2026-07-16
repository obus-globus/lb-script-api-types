import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
export class LongSaturatedMathKt extends Object {
    static isSaturated(self: number): boolean;
// (invalid TS: name contains '-')     static saturatingAdd-NuflL3o(value: number, unit: DurationUnit, duration: Duration): number;
    static saturatingDiff(valueNs: number, origin: number, unit: DurationUnit): Duration;
    static saturatingOriginsDiff(origin1: number, origin2: number, unit: DurationUnit): Duration;
}