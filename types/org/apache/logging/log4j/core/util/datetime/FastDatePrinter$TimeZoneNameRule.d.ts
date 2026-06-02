import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDatePrinter$Rule.d.ts'
export class FastDatePrinter$TimeZoneNameRule extends Object implements FastDatePrinter$Rule {
    static EMPTY_ARRAY: (Object | null)[];
    constructor(timeZone: TimeZone, locale: Locale, style: number)
    // private mDaylight: string;
    // private mLocale: Locale;
    // private mStandard: string;
    // private mStyle: number;
    appendTo(buffer: Appendable, calendar: Calendar): void;
    estimateLength(): number;
}