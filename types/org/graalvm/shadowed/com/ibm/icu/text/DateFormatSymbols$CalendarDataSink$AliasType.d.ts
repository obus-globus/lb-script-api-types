import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DateFormatSymbols$CalendarDataSink$AliasType extends Enum<DateFormatSymbols$CalendarDataSink$AliasType> {
    static DIFFERENT_CALENDAR: DateFormatSymbols$CalendarDataSink$AliasType;
    static GREGORIAN: DateFormatSymbols$CalendarDataSink$AliasType;
    static NONE: DateFormatSymbols$CalendarDataSink$AliasType;
    static SAME_CALENDAR: DateFormatSymbols$CalendarDataSink$AliasType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DateFormatSymbols$CalendarDataSink$AliasType;
    static values(): (Object | null)[];
    private constructor()
    name(): "SAME_CALENDAR" | "DIFFERENT_CALENDAR" | "GREGORIAN" | "NONE";
}