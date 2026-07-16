import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RelativeDateTimeFormatter$RelativeDateTimeUnit extends Enum<RelativeDateTimeFormatter$RelativeDateTimeUnit> {
    static DAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static FRIDAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static HOUR: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static MINUTE: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static MONDAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static MONTH: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static QUARTER: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static SATURDAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static SECOND: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static SUNDAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static THURSDAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static TUESDAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static WEDNESDAY: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static WEEK: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static YEAR: RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RelativeDateTimeFormatter$RelativeDateTimeUnit;
    static values(): RelativeDateTimeFormatter$RelativeDateTimeUnit[];
    private constructor()
    name(): "YEAR" | "QUARTER" | "MONTH" | "WEEK" | "DAY" | "HOUR" | "MINUTE" | "SECOND" | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY";
}