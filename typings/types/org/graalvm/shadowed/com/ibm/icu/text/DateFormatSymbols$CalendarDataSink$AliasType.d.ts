import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DateFormatSymbols$CalendarDataSink$AliasType extends Enum<DateFormatSymbols$CalendarDataSink$AliasType> {
    static DIFFERENT_CALENDAR: DateFormatSymbols$CalendarDataSink$AliasType;
    static GREGORIAN: DateFormatSymbols$CalendarDataSink$AliasType;
    static NONE: DateFormatSymbols$CalendarDataSink$AliasType;
    static SAME_CALENDAR: DateFormatSymbols$CalendarDataSink$AliasType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DateFormatSymbols$CalendarDataSink$AliasType;
    static values(): DateFormatSymbols$CalendarDataSink$AliasType[];
    private constructor()
    name(): "SAME_CALENDAR" | "DIFFERENT_CALENDAR" | "GREGORIAN" | "NONE";
}