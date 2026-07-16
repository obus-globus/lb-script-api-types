import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
import type { DurationUnitKt__DurationUnitJvmKt } from '../../kotlin/time/DurationUnitKt__DurationUnitJvmKt.d.ts'
export class DurationUnitKt__DurationUnitKt extends DurationUnitKt__DurationUnitJvmKt {
    static convertDurationUnit(value: number, sourceUnit: DurationUnit, targetUnit: DurationUnit): number;
    static convertDurationUnitOverflow(value: number, sourceUnit: DurationUnit, targetUnit: DurationUnit): number;
    static convertDurationUnitToMilliseconds(value: number, unit: DurationUnit): number;
    static shortName(self: DurationUnit): string;
    static toDurationUnit(self: TimeUnit): DurationUnit;
    static toTimeUnit(self: DurationUnit): TimeUnit;
}