import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface FastDatePrinter$Rule extends Object{
    appendTo(buf: Appendable, calendar: Calendar): void;
    estimateLength(): number;
}