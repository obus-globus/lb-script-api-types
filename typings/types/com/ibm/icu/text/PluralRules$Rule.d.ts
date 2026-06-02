import type { PluralRules$Constraint } from '../../../../com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$DecimalQuantitySamples } from '../../../../com/ibm/icu/text/PluralRules$DecimalQuantitySamples.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluralRules$Rule extends Object implements Serializable {
    constructor(arg0: string, arg1: PluralRules$Constraint, arg2: PluralRules$DecimalQuantitySamples, arg3: PluralRules$DecimalQuantitySamples)
    readonly constraint: PluralRules$Constraint;
    // private decimalSamples: PluralRules$DecimalQuantitySamples;
    // private integerSamples: PluralRules$DecimalQuantitySamples;
    readonly keyword: string;
    and(arg0: PluralRules$Constraint): PluralRules$Rule;
    appliesTo(arg0: PluralRules$IFixedDecimal): boolean;
    getConstraint(): string;
    getKeyword(): string;
    hashCode(): number;
    isLimited(arg0: PluralRules$SampleType): boolean;
    or(arg0: PluralRules$Constraint): PluralRules$Rule;
    toString(): string;
}