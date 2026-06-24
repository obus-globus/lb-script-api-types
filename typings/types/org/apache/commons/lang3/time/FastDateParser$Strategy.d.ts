import type { FastDateParser$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
export abstract class FastDateParser$Strategy extends Object {
    private constructor()
    constructor(arg0: FastDateParser$1)
    isNumber(): boolean;
    parse(arg0: FastDateParser, arg1: Calendar, arg2: string, arg3: ParsePosition, arg4: number): boolean;
}