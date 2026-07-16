import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
import type { DurationUnitKt__DurationUnitKt } from '../../kotlin/time/DurationUnitKt__DurationUnitKt.d.ts'
export class DurationUnitKt extends DurationUnitKt__DurationUnitKt {
    static convertDurationUnit(value: number, sourceUnit: DurationUnit, targetUnit: DurationUnit): number;
    static convertDurationUnitOverflow(value: number, sourceUnit: DurationUnit, targetUnit: DurationUnit): number;
    static convertDurationUnitToMilliseconds(value: number, unit: DurationUnit): number;
    static shortName(self: DurationUnit): string;
    static toDurationUnit(self: TimeUnit): DurationUnit;
    static toTimeUnit(self: DurationUnit): TimeUnit;
}