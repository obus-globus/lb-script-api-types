import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { StandardPluralRanges } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/range/StandardPluralRanges.d.ts'
import type { FormattedNumber } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FormattedNumber.d.ts'
import type { FormattedNumberRange } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FormattedNumberRange.d.ts'
import type { PluralRules$DecimalQuantitySamples } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$DecimalQuantitySamples.d.ts'
import type { PluralRules$FixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$FixedDecimal.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$KeywordStatus } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$KeywordStatus.d.ts'
import type { PluralRules$PluralType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { PluralRules$RuleList } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$RuleList.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Output } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Output.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class PluralRules extends Object implements Serializable {
    static DEFAULT: PluralRules;
    static KEYWORD_FEW: string;
    static KEYWORD_MANY: string;
    static KEYWORD_ONE: string;
    static KEYWORD_OTHER: string;
    static KEYWORD_TWO: string;
    static KEYWORD_ZERO: string;
    static NO_UNIQUE_VALUE: number;
    static NO_UNIQUE_VALUE_DECIMAL_QUANTITY: DecimalQuantity;
    static createRules(paramdescription: string): PluralRules;
    static forLocale(paramlocale: Locale): PluralRules;
    static forLocale(paramlocale: Locale, paramtype: PluralRules$PluralType): PluralRules;
    static forLocale(paramlocale: ULocale): PluralRules;
    static forLocale(paramlocale: ULocale, paramtype: PluralRules$PluralType): PluralRules;
    static getAvailableULocales(): ULocale[];
    static getFunctionalEquivalent(paramlocale: ULocale, paramisAvailable: boolean[]): ULocale;
    static newInternal(paramdescription: string, paramranges: StandardPluralRanges): PluralRules;
    static parseDescription(paramdescription: string): PluralRules;
    private constructor(rules: PluralRules$RuleList, standardPluralRanges: StandardPluralRanges)
    readonly keywords: string[];
    // private rules: PluralRules$RuleList;
    // private standardPluralRanges: StandardPluralRanges;
    // private addConditional(toAddTo: PluralRules$IFixedDecimal[], others: PluralRules$IFixedDecimal[], trial: number): boolean;
    // private addSample(keyword: string, sample: DecimalQuantity, maxCount: number, result: DecimalQuantity[]): boolean;
    compareTo(other: PluralRules): number;
    computeLimited(keyword: string, sampleType: PluralRules$SampleType): boolean;
    equals(rhs: Object | null): boolean;
    equals(rhs: PluralRules): boolean;
    getAllKeywordDecimalQuantityValues(keyword: string): DecimalQuantity[];
    getAllKeywordValues(keyword: string): number[];
    getAllKeywordValues(keyword: string, type: PluralRules$SampleType): DecimalQuantity[];
    getDecimalQuantitySamples(keyword: string): DecimalQuantity[];
    getDecimalQuantitySamples(keyword: string, sampleType: PluralRules$SampleType): DecimalQuantity[];
    getDecimalSamples(keyword: string, sampleType: PluralRules$SampleType): PluralRules$DecimalQuantitySamples;
    getKeywordStatus(keyword: string, offset: number, explicits: DecimalQuantity[], uniqueValue: Output<DecimalQuantity>): PluralRules$KeywordStatus;
    getKeywordStatus(keyword: string, offset: number, explicits: DecimalQuantity[], uniqueValue: Output<DecimalQuantity>, sampleType: PluralRules$SampleType): PluralRules$KeywordStatus;
    getKeywords(): string[];
    getRules(keyword: string): string;
    getSamples(keyword: string): number[];
    getSamples(keyword: string, sampleType: PluralRules$SampleType): number[];
    getUniqueKeywordDecimalQuantityValue(keyword: string): DecimalQuantity;
    getUniqueKeywordValue(keyword: string): number;
    hashCode(): number;
    isLimited(keyword: string): boolean;
    isLimited(keyword: string, sampleType: PluralRules$SampleType): boolean;
    matches(sample: PluralRules$FixedDecimal, keyword: string): boolean;
    // private readObject(in_: ObjectInputStream): void;
    select(number: number): string;
    select(number: number, countVisibleFractionDigits: number, fractionaldigits: number): string;
    select(number: FormattedNumber): string;
    select(range: FormattedNumberRange): string;
    select(number: PluralRules$IFixedDecimal): string;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
    // private writeReplace(): Object;
}