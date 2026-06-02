import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FastDatePrinter$Rule extends Object{
    appendTo(arg0: Appendable, arg1: Calendar): void;
    estimateLength(): number;
}