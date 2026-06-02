import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { TextTrieMap } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Currency } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { Currency$CurrencyStringInfo } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency$CurrencyStringInfo.d.ts'
export class CombinedCurrencyMatcher extends Object implements NumberParseMatcher {
    static getInstance(paramcurrency: Currency, paramdfs: DecimalFormatSymbols, paramparseFlags: number): CombinedCurrencyMatcher;
    private constructor(currency: Currency, dfs: DecimalFormatSymbols, parseFlags: number)
    // private afterPrefixInsert: string;
    // private beforeSuffixInsert: string;
    // private currency1: string;
    // private currency2: string;
    // private isoCode: string;
    // private localLongNames: string[];
    // private longNameTrie: TextTrieMap<Currency$CurrencyStringInfo>;
    // private symbolTrie: TextTrieMap<Currency$CurrencyStringInfo>;
    match(segment: StringSegment, result: ParsedNumber): boolean;
    // private matchCurrency(segment: StringSegment, result: ParsedNumber): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
    toString(): string;
}