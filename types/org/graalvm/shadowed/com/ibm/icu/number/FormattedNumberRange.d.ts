import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { NumberRangeFormatter$RangeIdentityResult } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatter$RangeIdentityResult.d.ts'
import type { ConstrainedFieldPosition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { FormattedValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/FormattedValue.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
export class FormattedNumberRange extends Object implements FormattedValue {
    constructor(string: FormattedStringBuilder, quantity1: DecimalQuantity, quantity2: DecimalQuantity, identityResult: NumberRangeFormatter$RangeIdentityResult)
    readonly identityResult: NumberRangeFormatter$RangeIdentityResult;
    /*not mapped: */ length(): number;
    // private quantity1: DecimalQuantity;
    // private quantity2: DecimalQuantity;
    // private string: FormattedStringBuilder;
    appendTo<A extends Appendable>(appendable: A): A;
    equals(other: Object | null): boolean;
    get(index: number): string;
    getFirstBigDecimal(): BigDecimal;
    getFirstFixedDecimal(): PluralRules$IFixedDecimal;
    getIdentityResult(): NumberRangeFormatter$RangeIdentityResult;
    getSecondBigDecimal(): BigDecimal;
    getSecondFixedDecimal(): PluralRules$IFixedDecimal;
    hashCode(): number;
    nextPosition(cfpos: ConstrainedFieldPosition): boolean;
    subSequence(start: number, end: number): CharSequence;
    toCharacterIterator(): AttributedCharacterIterator;
    toString(): string;
}