import type { AttributedCharacterIterator$Attribute } from '../../../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateFormat$Field extends Format$Field {
    static AM_PM: DateFormat$Field;
    static AM_PM_MIDNIGHT_NOON: DateFormat$Field;
    static DAY_OF_MONTH: DateFormat$Field;
    static DAY_OF_WEEK: DateFormat$Field;
    static DAY_OF_WEEK_IN_MONTH: DateFormat$Field;
    static DAY_OF_YEAR: DateFormat$Field;
    static DOW_LOCAL: DateFormat$Field;
    static ERA: DateFormat$Field;
    static EXTENDED_YEAR: DateFormat$Field;
    static FLEXIBLE_DAY_PERIOD: DateFormat$Field;
    static HOUR0: DateFormat$Field;
    static HOUR1: DateFormat$Field;
    static HOUR_OF_DAY0: DateFormat$Field;
    static HOUR_OF_DAY1: DateFormat$Field;
    static INPUT_METHOD_SEGMENT: AttributedCharacterIterator$Attribute;
    static JULIAN_DAY: DateFormat$Field;
    static LANGUAGE: AttributedCharacterIterator$Attribute;
    static MILLISECOND: DateFormat$Field;
    static MILLISECONDS_IN_DAY: DateFormat$Field;
    static MINUTE: DateFormat$Field;
    static MONTH: DateFormat$Field;
    static QUARTER: DateFormat$Field;
    static READING: AttributedCharacterIterator$Attribute;
    static RELATED_YEAR: DateFormat$Field;
    static SECOND: DateFormat$Field;
    static TIME_SEPARATOR: DateFormat$Field;
    static TIME_ZONE: DateFormat$Field;
    static WEEK_OF_MONTH: DateFormat$Field;
    static WEEK_OF_YEAR: DateFormat$Field;
    static YEAR: DateFormat$Field;
    static YEAR_WOY: DateFormat$Field;
    static ofCalendarField(paramarg0: number): DateFormat$Field;
    constructor(arg0: string, arg1: number)
    readonly calendarField: number;
    getCalendarField(): number;
    readResolve(): Object;
}