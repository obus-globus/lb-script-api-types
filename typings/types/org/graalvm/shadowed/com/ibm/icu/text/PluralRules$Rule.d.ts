import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralRules$Constraint } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$DecimalQuantitySamples } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$DecimalQuantitySamples.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
export class PluralRules$Rule extends Object implements Serializable {
    constructor(keyword: string, constraint: PluralRules$Constraint, integerSamples: PluralRules$DecimalQuantitySamples, decimalSamples: PluralRules$DecimalQuantitySamples)
    readonly constraint: PluralRules$Constraint;
    // private decimalSamples: PluralRules$DecimalQuantitySamples;
    // private integerSamples: PluralRules$DecimalQuantitySamples;
    readonly keyword: string;
    and(c: PluralRules$Constraint): PluralRules$Rule;
    appliesTo(n: PluralRules$IFixedDecimal): boolean;
    getConstraint(): string;
    getKeyword(): string;
    hashCode(): number;
    isLimited(sampleType: PluralRules$SampleType): boolean;
    or(c: PluralRules$Constraint): PluralRules$Rule;
    toString(): string;
}