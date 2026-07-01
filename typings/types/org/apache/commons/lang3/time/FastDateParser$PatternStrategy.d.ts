import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDateParser$NumberStrategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$NumberStrategy.d.ts'
import type { FastDateParser$Strategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$Strategy.d.ts'
export abstract class FastDateParser$PatternStrategy extends FastDateParser$Strategy {
    constructor(arg0: FastDateParser$NumberStrategy)
    // private pattern: Pattern;
    createPattern(arg0: StringBuilder): void;
    createPattern(arg0: string): void;
    isNumber(): boolean;
    parse(arg0: FastDateParser, arg1: Calendar, arg2: string, arg3: ParsePosition, arg4: number): boolean;
    setCalendar(arg0: FastDateParser, arg1: Calendar, arg2: string): void;
    toString(): string;
}