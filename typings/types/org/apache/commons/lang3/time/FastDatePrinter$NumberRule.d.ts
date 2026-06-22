import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../org/apache/commons/lang3/time/FastDatePrinter$Rule.d.ts'
export interface FastDatePrinter$NumberRule extends Object, FastDatePrinter$Rule{
    appendTo(arg0: Appendable, arg1: number): void;
    estimateLength(): number;
}