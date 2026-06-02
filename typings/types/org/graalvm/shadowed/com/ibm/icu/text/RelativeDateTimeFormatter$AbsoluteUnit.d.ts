import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class RelativeDateTimeFormatter$AbsoluteUnit extends Enum<RelativeDateTimeFormatter$AbsoluteUnit> {
    static DAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static FRIDAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static HOUR: RelativeDateTimeFormatter$AbsoluteUnit;
    static MINUTE: RelativeDateTimeFormatter$AbsoluteUnit;
    static MONDAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static MONTH: RelativeDateTimeFormatter$AbsoluteUnit;
    static NOW: RelativeDateTimeFormatter$AbsoluteUnit;
    static QUARTER: RelativeDateTimeFormatter$AbsoluteUnit;
    static SATURDAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static SUNDAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static THURSDAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static TUESDAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static WEDNESDAY: RelativeDateTimeFormatter$AbsoluteUnit;
    static WEEK: RelativeDateTimeFormatter$AbsoluteUnit;
    static YEAR: RelativeDateTimeFormatter$AbsoluteUnit;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RelativeDateTimeFormatter$AbsoluteUnit;
    static values(): (Object | null)[];
    private constructor()
    name(): "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "DAY" | "WEEK" | "MONTH" | "YEAR" | "NOW" | "QUARTER" | "HOUR" | "MINUTE";
}