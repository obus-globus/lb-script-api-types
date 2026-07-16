import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
export class DurationUnitKt__DurationUnitJvmKt extends Object {
    static convertDurationUnit(value: number, sourceUnit: DurationUnit, targetUnit: DurationUnit): number;
    static convertDurationUnitOverflow(value: number, sourceUnit: DurationUnit, targetUnit: DurationUnit): number;
    static toDurationUnit(self: TimeUnit): DurationUnit;
    static toTimeUnit(self: DurationUnit): TimeUnit;
}