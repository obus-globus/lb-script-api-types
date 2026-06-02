import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { TextTrieMap } from '../../../../../../com/ibm/icu/impl/TextTrieMap.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Currency } from '../../../../../../com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyStringInfo } from '../../../../../../com/ibm/icu/util/Currency$CurrencyStringInfo.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CombinedCurrencyMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramarg0: Currency, paramarg1: DecimalFormatSymbols, paramarg2: number): CombinedCurrencyMatcher;
    private constructor(arg0: Currency, arg1: DecimalFormatSymbols, arg2: number)
    // private afterPrefixInsert: string;
    // private beforeSuffixInsert: string;
    // private currency1: string;
    // private currency2: string;
    // private isoCode: string;
    // private localLongNames: string[];
    // private longNameTrie: TextTrieMap<Currency$CurrencyStringInfo>;
    // private symbolTrie: TextTrieMap<Currency$CurrencyStringInfo>;
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    // private matchCurrency(arg0: StringSegment, arg1: ParsedNumber): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
    toString(): string;
}