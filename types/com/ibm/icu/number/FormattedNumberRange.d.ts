import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { NumberRangeFormatter$RangeIdentityResult } from '../../../../com/ibm/icu/number/NumberRangeFormatter$RangeIdentityResult.d.ts'
import type { ConstrainedFieldPosition } from '../../../../com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { FormattedValue } from '../../../../com/ibm/icu/text/FormattedValue.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { BigDecimal } from '../../../../java/math/BigDecimal.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class FormattedNumberRange extends Object implements FormattedValue {
    constructor(arg0: FormattedStringBuilder, arg1: DecimalQuantity, arg2: DecimalQuantity, arg3: NumberRangeFormatter$RangeIdentityResult)
    readonly identityResult: NumberRangeFormatter$RangeIdentityResult;
    /*not mapped: */ length(): number;
    // private quantity1: DecimalQuantity;
    // private quantity2: DecimalQuantity;
    // private string: FormattedStringBuilder;
    appendTo<A extends Appendable>(arg0: A): A;
    equals(arg0: Object | null): boolean;
    get(arg0: number): string;
    getFirstBigDecimal(): BigDecimal;
    getFirstFixedDecimal(): PluralRules$IFixedDecimal;
    getIdentityResult(): NumberRangeFormatter$RangeIdentityResult;
    getSecondBigDecimal(): BigDecimal;
    getSecondFixedDecimal(): PluralRules$IFixedDecimal;
    hashCode(): number;
    nextPosition(arg0: ConstrainedFieldPosition): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
    toCharacterIterator(): AttributedCharacterIterator;
    toString(): string;
}