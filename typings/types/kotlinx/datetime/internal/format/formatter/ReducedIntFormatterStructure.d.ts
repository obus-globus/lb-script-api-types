import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FormatterStructure } from '../../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
export class ReducedIntFormatterStructure<T extends unknown> extends Object implements FormatterStructure<T> {
    constructor(number: (param0: T) => number, digits: number, base: number)
    // private base: number;
    // private digits: number;
    // private number: (param0: T) => number;
    format(obj: T, builder: Appendable, minusNotRequired: boolean): void;
}