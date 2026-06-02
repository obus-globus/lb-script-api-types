import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralRules$DecimalQuantitySamples } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$DecimalQuantitySamples.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$Rule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Rule.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
export class PluralRules$RuleList extends Object implements Serializable {
    private constructor()
    // private hasExplicitBoundingInfo: boolean;
    // private rules: PluralRules$Rule[];
    addRule(nextRule: PluralRules$Rule): PluralRules$RuleList;
    computeLimited(keyword: string, sampleType: PluralRules$SampleType): boolean;
    finish(): PluralRules$RuleList;
    getDecimalSamples(keyword: string, sampleType: PluralRules$SampleType): PluralRules$DecimalQuantitySamples;
    getKeywords(): string[];
    getRules(keyword: string): string;
    isLimited(keyword: string, sampleType: PluralRules$SampleType): boolean;
    select(n: PluralRules$IFixedDecimal): string;
    select(sample: PluralRules$IFixedDecimal, keyword: string): boolean;
    // private selectRule(n: PluralRules$IFixedDecimal): PluralRules$Rule;
    toString(): string;
}