import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDateParser$PatternStrategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$PatternStrategy.d.ts'
import type { FastDateParser$TimeZoneStrategy$TzInfo } from '../../../../../org/apache/commons/lang3/time/FastDateParser$TimeZoneStrategy$TzInfo.d.ts'
export class FastDateParser$TimeZoneStrategy extends FastDateParser$PatternStrategy {
    constructor(arg0: Locale)
    // private locale: Locale;
    // private tzNames: JavaMap<string, FastDateParser$TimeZoneStrategy$TzInfo>;
    setCalendar(arg0: FastDateParser, arg1: Calendar, arg2: string): void;
    toString(): string;
}