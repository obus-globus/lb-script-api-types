import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDatePrinter$Rule.d.ts'
export class FastDatePrinter$TimeZoneNumberRule extends Object implements FastDatePrinter$Rule {
    static EMPTY_ARRAY: FastDatePrinter$Rule[];
    constructor(colon: boolean)
    // private mColon: boolean;
    appendTo(buffer: Appendable, calendar: Calendar): void;
    estimateLength(): number;
}