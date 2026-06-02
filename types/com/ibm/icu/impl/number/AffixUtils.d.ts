import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { AffixUtils$SymbolProvider } from '../../../../../com/ibm/icu/impl/number/AffixUtils$SymbolProvider.d.ts'
import type { AffixUtils$TokenConsumer } from '../../../../../com/ibm/icu/impl/number/AffixUtils$TokenConsumer.d.ts'
import type { NumberFormat$Field } from '../../../../../com/ibm/icu/text/NumberFormat$Field.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class AffixUtils extends Object {
    static TYPE_APPROXIMATELY_SIGN: number;
    static TYPE_CURRENCY_DOUBLE: number;
    static TYPE_CURRENCY_OVERFLOW: number;
    static TYPE_CURRENCY_QUAD: number;
    static TYPE_CURRENCY_QUINT: number;
    static TYPE_CURRENCY_SINGLE: number;
    static TYPE_CURRENCY_TRIPLE: number;
    static TYPE_MINUS_SIGN: number;
    static TYPE_PERCENT: number;
    static TYPE_PERMILLE: number;
    static TYPE_PLUS_SIGN: number;
    static containsOnlySymbolsAndIgnorables(paramarg0: CharSequence, paramarg1: string[]): boolean;
    static containsType(paramarg0: CharSequence, paramarg1: number): boolean;
    static escape(paramarg0: CharSequence, paramarg1: StringBuilder): number;
    static escape(paramarg0: CharSequence): string;
    static estimateLength(paramarg0: CharSequence): number;
    static getFieldForType(paramarg0: number): NumberFormat$Field;
    static hasCurrencySymbols(paramarg0: CharSequence): boolean;
    static iterateWithConsumer(paramarg0: CharSequence, paramarg1: AffixUtils$TokenConsumer): void;
    static replaceType(paramarg0: CharSequence, paramarg1: number, paramarg2: string): string;
    static unescape(paramarg0: CharSequence, paramarg1: FormattedStringBuilder, paramarg2: number, paramarg3: AffixUtils$SymbolProvider, paramarg4: NumberFormat$Field): number;
    static unescapedCount(paramarg0: CharSequence, paramarg1: boolean, paramarg2: AffixUtils$SymbolProvider): number;
    constructor()
}