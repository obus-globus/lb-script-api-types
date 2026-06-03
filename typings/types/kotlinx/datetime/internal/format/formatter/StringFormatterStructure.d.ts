import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FormatterStructure } from '../../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
export class StringFormatterStructure<T extends Object | number | string | boolean> extends Object implements FormatterStructure<T> {
    constructor(string: (param0: T) => string)
    // private string: (param0: T) => string;
    format(obj: T, builder: Appendable, minusNotRequired: boolean): void;
}