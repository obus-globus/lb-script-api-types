import type { PluralRules$DecimalQuantitySamples } from '../../../../com/ibm/icu/text/PluralRules$DecimalQuantitySamples.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$Rule } from '../../../../com/ibm/icu/text/PluralRules$Rule.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluralRules$RuleList extends Object implements Serializable {
    private constructor()
    // private hasExplicitBoundingInfo: boolean;
    // private rules: PluralRules$Rule[];
    addRule(arg0: PluralRules$Rule): PluralRules$RuleList;
    computeLimited(arg0: string, arg1: PluralRules$SampleType): boolean;
    finish(): PluralRules$RuleList;
    getDecimalSamples(arg0: string, arg1: PluralRules$SampleType): PluralRules$DecimalQuantitySamples;
    getKeywords(): string[];
    getRules(arg0: string): string;
    isLimited(arg0: string, arg1: PluralRules$SampleType): boolean;
    select(arg0: PluralRules$IFixedDecimal): string;
    select(arg0: PluralRules$IFixedDecimal, arg1: string): boolean;
    // private selectRule(arg0: PluralRules$IFixedDecimal): PluralRules$Rule;
    toString(): string;
}