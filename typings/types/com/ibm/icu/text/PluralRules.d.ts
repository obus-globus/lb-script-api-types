import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { StandardPluralRanges } from '../../../../com/ibm/icu/impl/number/range/StandardPluralRanges.d.ts'
import type { FormattedNumber } from '../../../../com/ibm/icu/number/FormattedNumber.d.ts'
import type { FormattedNumberRange } from '../../../../com/ibm/icu/number/FormattedNumberRange.d.ts'
import type { PluralRules$DecimalQuantitySamples } from '../../../../com/ibm/icu/text/PluralRules$DecimalQuantitySamples.d.ts'
import type { PluralRules$FixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$FixedDecimal.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$KeywordStatus } from '../../../../com/ibm/icu/text/PluralRules$KeywordStatus.d.ts'
import type { PluralRules$PluralType } from '../../../../com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { PluralRules$RuleList } from '../../../../com/ibm/icu/text/PluralRules$RuleList.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Output } from '../../../../com/ibm/icu/util/Output.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static createRules(paramarg0: string): PluralRules;
    static forLocale(paramarg0: ULocale): PluralRules;
    static forLocale(paramarg0: ULocale, paramarg1: PluralRules$PluralType): PluralRules;
    static forLocale(paramarg0: Locale): PluralRules;
    static forLocale(paramarg0: Locale, paramarg1: PluralRules$PluralType): PluralRules;
    static getAvailableULocales(): (Object | null)[];
    static getFunctionalEquivalent(paramarg0: ULocale, paramarg1: (Object | null)[]): ULocale;
    static newInternal(paramarg0: string, paramarg1: StandardPluralRanges): PluralRules;
    static parseDescription(paramarg0: string): PluralRules;
    private constructor(arg0: PluralRules$RuleList, arg1: StandardPluralRanges)
    readonly keywords: string[];
    // private rules: PluralRules$RuleList;
    // private standardPluralRanges: StandardPluralRanges;
    // private addConditional(arg0: PluralRules$IFixedDecimal[], arg1: PluralRules$IFixedDecimal[], arg2: number): boolean;
    // private addSample(arg0: string, arg1: DecimalQuantity, arg2: number, arg3: DecimalQuantity[]): boolean;
    compareTo(arg0: PluralRules): number;
    computeLimited(arg0: string, arg1: PluralRules$SampleType): boolean;
    equals(arg0: PluralRules): boolean;
    equals(arg0: Object | null): boolean;
    getAllKeywordDecimalQuantityValues(arg0: string): E[];
    getAllKeywordValues(arg0: string): E[];
    getAllKeywordValues(arg0: string, arg1: PluralRules$SampleType): E[];
    getDecimalQuantitySamples(arg0: string): E[];
    getDecimalQuantitySamples(arg0: string, arg1: PluralRules$SampleType): E[];
    getDecimalSamples(arg0: string, arg1: PluralRules$SampleType): PluralRules$DecimalQuantitySamples;
    getKeywordStatus(arg0: string, arg1: number, arg2: DecimalQuantity[], arg3: Output<DecimalQuantity>): PluralRules$KeywordStatus;
    getKeywordStatus(arg0: string, arg1: number, arg2: DecimalQuantity[], arg3: Output<DecimalQuantity>, arg4: PluralRules$SampleType): PluralRules$KeywordStatus;
    getKeywords(): string[];
    getRules(arg0: string): string;
    getSamples(arg0: string): E[];
    getSamples(arg0: string, arg1: PluralRules$SampleType): E[];
    getUniqueKeywordDecimalQuantityValue(arg0: string): DecimalQuantity;
    getUniqueKeywordValue(arg0: string): number;
    hashCode(): number;
    isLimited(arg0: string): boolean;
    isLimited(arg0: string, arg1: PluralRules$SampleType): boolean;
    matches(arg0: PluralRules$FixedDecimal, arg1: string): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    select(arg0: FormattedNumber): string;
    select(arg0: FormattedNumberRange): string;
    select(arg0: PluralRules$IFixedDecimal): string;
    select(arg0: number): string;
    select(arg0: number, arg1: number, arg2: number): string;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
    // private writeReplace(): Object;
}