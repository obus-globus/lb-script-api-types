import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDateParser$PatternStrategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$PatternStrategy.d.ts'
export class FastDateParser$ISO8601TimeZoneStrategy extends FastDateParser$PatternStrategy {
    constructor(arg0: string)
    setCalendar(arg0: FastDateParser, arg1: Calendar, arg2: string): void;
}