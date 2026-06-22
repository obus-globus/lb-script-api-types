import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDatePrinter$Rule.d.ts'
export interface FastDatePrinter$NumberRule extends Object, FastDatePrinter$Rule{
    appendTo(buffer: Appendable, value: number): void;
    estimateLength(): number;
}