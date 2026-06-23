import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DecimalFraction } from '../../../../../kotlinx/datetime/internal/DecimalFraction.d.ts'
import type { FormatterStructure } from '../../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
export class DecimalFractionFormatterStructure<T extends unknown> extends Object implements FormatterStructure<T> {
    constructor(number: (param0: T) => DecimalFraction, minDigits: number, maxDigits: number, zerosToAdd: number[])
    // private maxDigits: number;
    // private minDigits: number;
    // private number: (param0: T) => DecimalFraction;
    // private zerosToAdd: number[];
    format(obj: T, builder: Appendable, minusNotRequired: boolean): void;
}