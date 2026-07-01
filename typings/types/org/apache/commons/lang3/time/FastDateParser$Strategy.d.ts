import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDateParser$NumberStrategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$NumberStrategy.d.ts'
export abstract class FastDateParser$Strategy extends Object {
    constructor(arg0: FastDateParser$NumberStrategy)
    isNumber(): boolean;
    parse(arg0: FastDateParser, arg1: Calendar, arg2: string, arg3: ParsePosition, arg4: number): boolean;
}