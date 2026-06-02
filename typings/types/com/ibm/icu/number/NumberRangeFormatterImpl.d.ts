import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { Modifier } from '../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { RangeMacroProps } from '../../../../com/ibm/icu/impl/number/range/RangeMacroProps.d.ts'
import type { StandardPluralRanges } from '../../../../com/ibm/icu/impl/number/range/StandardPluralRanges.d.ts'
import type { FormattedNumberRange } from '../../../../com/ibm/icu/number/FormattedNumberRange.d.ts'
import type { NumberFormatterImpl } from '../../../../com/ibm/icu/number/NumberFormatterImpl.d.ts'
import type { NumberRangeFormatter$RangeCollapse } from '../../../../com/ibm/icu/number/NumberRangeFormatter$RangeCollapse.d.ts'
import type { NumberRangeFormatter$RangeIdentityFallback } from '../../../../com/ibm/icu/number/NumberRangeFormatter$RangeIdentityFallback.d.ts'
import type { NumberRangeFormatter$RangeIdentityResult } from '../../../../com/ibm/icu/number/NumberRangeFormatter$RangeIdentityResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberRangeFormatterImpl extends Object {
    constructor(arg0: RangeMacroProps)
    // private fApproximatelyFormatter: NumberFormatterImpl;
    // private fCollapse: NumberRangeFormatter$RangeCollapse;
    // private fIdentityFallback: NumberRangeFormatter$RangeIdentityFallback;
    // private fPluralRanges: StandardPluralRanges;
    // private fRangePattern: string;
    // private fSameFormatters: boolean;
    // private formatterImpl1: NumberFormatterImpl;
    // private formatterImpl2: NumberFormatterImpl;
    format(arg0: DecimalQuantity, arg1: DecimalQuantity, arg2: boolean): FormattedNumberRange;
    // private formatApproximately(arg0: DecimalQuantity, arg1: DecimalQuantity, arg2: FormattedStringBuilder, arg3: MicroProps, arg4: MicroProps): void;
    // private formatRange(arg0: DecimalQuantity, arg1: DecimalQuantity, arg2: FormattedStringBuilder, arg3: MicroProps, arg4: MicroProps): void;
    // private formatSingleValue(arg0: DecimalQuantity, arg1: DecimalQuantity, arg2: FormattedStringBuilder, arg3: MicroProps, arg4: MicroProps): void;
    identity2d(arg0: NumberRangeFormatter$RangeIdentityFallback, arg1: NumberRangeFormatter$RangeIdentityResult): number;
    resolveModifierPlurals(arg0: Modifier, arg1: Modifier): Modifier;
}