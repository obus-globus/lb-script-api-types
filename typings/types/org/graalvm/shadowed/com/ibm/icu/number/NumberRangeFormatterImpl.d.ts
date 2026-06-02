import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { Modifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { RangeMacroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/range/RangeMacroProps.d.ts'
import type { StandardPluralRanges } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/range/StandardPluralRanges.d.ts'
import type { FormattedNumberRange } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FormattedNumberRange.d.ts'
import type { NumberFormatterImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatterImpl.d.ts'
import type { NumberRangeFormatter$RangeCollapse } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatter$RangeCollapse.d.ts'
import type { NumberRangeFormatter$RangeIdentityFallback } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatter$RangeIdentityFallback.d.ts'
import type { NumberRangeFormatter$RangeIdentityResult } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatter$RangeIdentityResult.d.ts'
export class NumberRangeFormatterImpl extends Object {
    constructor(macros: RangeMacroProps)
    // private fApproximatelyFormatter: NumberFormatterImpl;
    // private fCollapse: NumberRangeFormatter$RangeCollapse;
    // private fIdentityFallback: NumberRangeFormatter$RangeIdentityFallback;
    // private fPluralRanges: StandardPluralRanges;
    // private fRangePattern: string;
    // private fSameFormatters: boolean;
    // private formatterImpl1: NumberFormatterImpl;
    // private formatterImpl2: NumberFormatterImpl;
    format(quantity1: DecimalQuantity, quantity2: DecimalQuantity, equalBeforeRounding: boolean): FormattedNumberRange;
    // private formatApproximately(quantity1: DecimalQuantity, quantity2: DecimalQuantity, string: FormattedStringBuilder, micros1: MicroProps, micros2: MicroProps): void;
    // private formatRange(quantity1: DecimalQuantity, quantity2: DecimalQuantity, string: FormattedStringBuilder, micros1: MicroProps, micros2: MicroProps): void;
    // private formatSingleValue(quantity1: DecimalQuantity, quantity2: DecimalQuantity, string: FormattedStringBuilder, micros1: MicroProps, micros2: MicroProps): void;
    identity2d(a: NumberRangeFormatter$RangeIdentityFallback, b: NumberRangeFormatter$RangeIdentityResult): number;
    resolveModifierPlurals(first: Modifier, second: Modifier): Modifier;
}