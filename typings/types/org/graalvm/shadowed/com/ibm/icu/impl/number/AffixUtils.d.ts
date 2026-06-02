import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { AffixUtils$SymbolProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixUtils$SymbolProvider.d.ts'
import type { AffixUtils$TokenConsumer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixUtils$TokenConsumer.d.ts'
import type { NumberFormat$Field } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$Field.d.ts'
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
    static containsOnlySymbolsAndIgnorables(paramaffixPattern: CharSequence, paramignorables: string[]): boolean;
    static containsType(paramaffixPattern: CharSequence, paramtype: number): boolean;
    static escape(paraminput: CharSequence, paramoutput: StringBuilder): number;
    static escape(paraminput: CharSequence): string;
    static estimateLength(parampatternString: CharSequence): number;
    static getFieldForType(paramtype: number): NumberFormat$Field;
    static hasCurrencySymbols(paramaffixPattern: CharSequence): boolean;
    static iterateWithConsumer(paramaffixPattern: CharSequence, paramconsumer: AffixUtils$TokenConsumer): void;
    static replaceType(paramaffixPattern: CharSequence, paramtype: number, paramreplacementChar: string): string;
    static unescape(paramaffixPattern: CharSequence, paramoutput: FormattedStringBuilder, paramposition: number, paramprovider: AffixUtils$SymbolProvider, paramfield: NumberFormat$Field): number;
    static unescapedCount(paramaffixPattern: CharSequence, paramlengthOrCount: boolean, paramprovider: AffixUtils$SymbolProvider): number;
    constructor()
}