import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { FormatterStructure } from '../../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
export class SignedIntFormatterStructure<T extends Object | number | string | boolean> extends Object implements FormatterStructure<T> {
    constructor(number: Function1<T, number>, zeroPadding: number, outputPlusOnExceededWidth: number | null)
    // private number: (param0: T) => number;
    // private outputPlusOnExceededWidth: number | null;
    // private zeroPadding: number;
    format(obj: T, builder: Appendable, minusNotRequired: boolean): void;
}