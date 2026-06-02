import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { ConstrainedFieldPosition } from '../../../../com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { DisplayOptions$NounClass } from '../../../../com/ibm/icu/text/DisplayOptions$NounClass.d.ts'
import type { FormattedValue } from '../../../../com/ibm/icu/text/FormattedValue.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { MeasureUnit } from '../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class FormattedNumber extends Object implements FormattedValue {
    constructor(arg0: FormattedStringBuilder, arg1: DecimalQuantity, arg2: MeasureUnit, arg3: string)
    // private fq: DecimalQuantity;
    readonly gender: string;
    /*not mapped: */ length(): number;
    readonly outputUnit: MeasureUnit;
    // private string: FormattedStringBuilder;
    appendTo<A extends Appendable>(arg0: A): A;
    get(arg0: number): string;
    getFixedDecimal(): PluralRules$IFixedDecimal;
    getGender(): string;
    getNounClass(): DisplayOptions$NounClass;
    getOutputUnit(): MeasureUnit;
    nextPosition(arg0: ConstrainedFieldPosition): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
    toBigDecimal(): BigDecimal;
    toCharacterIterator(): AttributedCharacterIterator;
    toString(): string;
}