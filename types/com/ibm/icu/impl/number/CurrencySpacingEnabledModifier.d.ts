import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ConstantMultiFieldModifier } from '../../../../../com/ibm/icu/impl/number/ConstantMultiFieldModifier.d.ts'
import type { DecimalFormatSymbols } from '../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class CurrencySpacingEnabledModifier extends ConstantMultiFieldModifier {
    static applyCurrencySpacing(paramarg0: FormattedStringBuilder, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: DecimalFormatSymbols): number;
    constructor(arg0: FormattedStringBuilder, arg1: FormattedStringBuilder, arg2: boolean, arg3: boolean, arg4: DecimalFormatSymbols)
    // private afterPrefixInsert: string;
    // private afterPrefixUnicodeSet: string[];
    // private beforeSuffixInsert: string;
    // private beforeSuffixUnicodeSet: string[];
    apply(arg0: FormattedStringBuilder, arg1: number, arg2: number): number;
}