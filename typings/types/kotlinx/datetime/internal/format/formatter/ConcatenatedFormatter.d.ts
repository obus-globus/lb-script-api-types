import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FormatterStructure } from '../../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
export class ConcatenatedFormatter<T extends Object | number | string | boolean> extends Object implements FormatterStructure<T> {
    constructor(formatters: FormatterStructure<T>[])
    // private formatters: FormatterStructure<T>[];
    format(obj: T, builder: Appendable, minusNotRequired: boolean): void;
}