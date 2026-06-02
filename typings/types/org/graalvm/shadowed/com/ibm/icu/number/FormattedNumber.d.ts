import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { ConstrainedFieldPosition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { DisplayOptions$NounClass } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$NounClass.d.ts'
import type { FormattedValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/FormattedValue.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { MeasureUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export class FormattedNumber extends Object implements FormattedValue {
    constructor(nsb: FormattedStringBuilder, fq: DecimalQuantity, outputUnit: MeasureUnit, gender: string)
    // private fq: DecimalQuantity;
    readonly gender: string;
    /*not mapped: */ length(): number;
    readonly outputUnit: MeasureUnit;
    // private string: FormattedStringBuilder;
    appendTo<A extends Appendable>(appendable: A): A;
    get(index: number): string;
    getFixedDecimal(): PluralRules$IFixedDecimal;
    getGender(): string;
    getNounClass(): DisplayOptions$NounClass;
    getOutputUnit(): MeasureUnit;
    nextPosition(cfpos: ConstrainedFieldPosition): boolean;
    subSequence(start: number, end: number): CharSequence;
    toBigDecimal(): BigDecimal;
    toCharacterIterator(): AttributedCharacterIterator;
    toString(): string;
}