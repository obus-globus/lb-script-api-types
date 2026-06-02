import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../org/apache/commons/lang3/time/FastDatePrinter$Rule.d.ts'
export class FastDatePrinter$TextField extends Object implements FastDatePrinter$Rule {
    constructor(arg0: number, arg1: string[])
    // private field: number;
    // private values: string[];
    appendTo(arg0: Appendable, arg1: Calendar): void;
    estimateLength(): number;
}