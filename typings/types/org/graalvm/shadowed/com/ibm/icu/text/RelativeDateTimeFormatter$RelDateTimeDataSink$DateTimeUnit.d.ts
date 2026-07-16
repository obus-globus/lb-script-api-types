import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
export class RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit extends Enum<RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit> {
    static DAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static FRIDAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static HOUR: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static MINUTE: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static MONDAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static MONTH: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static QUARTER: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static SATURDAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static SECOND: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static SUNDAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static THURSDAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static TUESDAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static WEDNESDAY: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static WEEK: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static YEAR: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    static values(): RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit[];
    private constructor(relUnit: RelativeDateTimeFormatter$RelativeUnit, absUnit: RelativeDateTimeFormatter$AbsoluteUnit)
    // private absUnit: RelativeDateTimeFormatter$AbsoluteUnit;
    // private relUnit: RelativeDateTimeFormatter$RelativeUnit;
    name(): "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR" | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY";
}