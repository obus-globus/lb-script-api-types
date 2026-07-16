import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
export class DurationUnitKt__DurationUnitJvmKt extends Object {
    static convertDurationUnit(paramarg0: number, paramarg1: DurationUnit, paramarg2: DurationUnit): number;
    static convertDurationUnitOverflow(paramarg0: number, paramarg1: DurationUnit, paramarg2: DurationUnit): number;
    static toDurationUnit(paramarg0: TimeUnit): DurationUnit;
    static toTimeUnit(paramarg0: DurationUnit): TimeUnit;
}