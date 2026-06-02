import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDateParser$Strategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$Strategy.d.ts'
export class FastDateParser$CopyQuotedStrategy extends FastDateParser$Strategy {
    constructor(arg0: string)
    // private formatField: string;
    isNumber(): boolean;
    parse(arg0: FastDateParser, arg1: Calendar, arg2: string, arg3: ParsePosition, arg4: number): boolean;
    toString(): string;
}