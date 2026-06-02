import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$NumberRule } from '../../../../../org/apache/commons/lang3/time/FastDatePrinter$NumberRule.d.ts'
export class FastDatePrinter$PaddedNumberField extends Object implements FastDatePrinter$NumberRule {
    constructor(arg0: number, arg1: number)
    // private field: number;
    // private size: number;
    appendTo(arg0: Appendable, arg1: Calendar): void;
    appendTo(arg0: Appendable, arg1: number): void;
    estimateLength(): number;
}