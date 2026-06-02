import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDateParser$PatternStrategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$PatternStrategy.d.ts'
export class FastDateParser$CaseInsensitiveTextStrategy extends FastDateParser$PatternStrategy {
    constructor(arg0: number, arg1: Calendar, arg2: Locale)
    // private field: number;
    // private lKeyValues: { [key: string]: number };
    // private locale: Locale;
    setCalendar(arg0: FastDateParser, arg1: Calendar, arg2: string): void;
    toString(): string;
}