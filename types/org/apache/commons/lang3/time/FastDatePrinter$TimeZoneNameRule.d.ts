import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../org/apache/commons/lang3/time/FastDatePrinter$Rule.d.ts'
export class FastDatePrinter$TimeZoneNameRule extends Object implements FastDatePrinter$Rule {
    constructor(arg0: TimeZone, arg1: Locale, arg2: number)
    // private daylight: string;
    // private locale: Locale;
    // private standard: string;
    // private style: number;
    appendTo(arg0: Appendable, arg1: Calendar): void;
    estimateLength(): number;
}