import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ConstantMultiFieldModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/ConstantMultiFieldModifier.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class CurrencySpacingEnabledModifier extends ConstantMultiFieldModifier {
    static applyCurrencySpacing(paramoutput: FormattedStringBuilder, paramprefixStart: number, paramprefixLen: number, paramsuffixStart: number, paramsuffixLen: number, paramsymbols: DecimalFormatSymbols): number;
    constructor(prefix: FormattedStringBuilder, suffix: FormattedStringBuilder, overwrite: boolean, strong: boolean, symbols: DecimalFormatSymbols)
    // private afterPrefixInsert: string;
    // private afterPrefixUnicodeSet: string[];
    // private beforeSuffixInsert: string;
    // private beforeSuffixUnicodeSet: string[];
    apply(output: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
}