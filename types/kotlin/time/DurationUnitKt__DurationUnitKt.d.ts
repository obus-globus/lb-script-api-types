import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
import type { DurationUnitKt__DurationUnitJvmKt } from '../../kotlin/time/DurationUnitKt__DurationUnitJvmKt.d.ts'
export class DurationUnitKt__DurationUnitKt extends DurationUnitKt__DurationUnitJvmKt {
    static convertDurationUnit(paramarg0: number, paramarg1: DurationUnit, paramarg2: DurationUnit): number;
    static convertDurationUnit(paramarg0: number, paramarg1: DurationUnit, paramarg2: DurationUnit): number;
    static convertDurationUnitOverflow(paramarg0: number, paramarg1: DurationUnit, paramarg2: DurationUnit): number;
    static convertDurationUnitToMilliseconds(paramarg0: number, paramarg1: DurationUnit): number;
    static shortName(paramarg0: DurationUnit): string;
    static toDurationUnit(paramarg0: TimeUnit): DurationUnit;
    static toTimeUnit(paramarg0: DurationUnit): TimeUnit;
}