import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$NumberRule } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDatePrinter$NumberRule.d.ts'
export class FastDatePrinter$UnpaddedMonthField extends Object implements FastDatePrinter$NumberRule {
    static EMPTY_ARRAY: (Object | null)[];
    constructor()
    appendTo(buffer: Appendable, calendar: Calendar): void;
    appendTo(buffer: Appendable, value: number): void;
    estimateLength(): number;
}