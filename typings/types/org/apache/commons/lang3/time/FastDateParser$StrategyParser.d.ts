import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDateParser$StrategyAndWidth } from '../../../../../org/apache/commons/lang3/time/FastDateParser$StrategyAndWidth.d.ts'
export class FastDateParser$StrategyParser extends Object {
    constructor(null_: FastDateParser, arg1: Calendar)
    // private currentIdx: number;
    // private definingCalendar: Calendar;
    getNextStrategy(): FastDateParser$StrategyAndWidth;
    // private letterPattern(arg0: string): FastDateParser$StrategyAndWidth;
    // private literal(): FastDateParser$StrategyAndWidth;
}