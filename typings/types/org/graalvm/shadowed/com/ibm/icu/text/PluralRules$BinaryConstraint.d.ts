import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralRules$Constraint } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
export abstract class PluralRules$BinaryConstraint extends Object implements Serializable, PluralRules$Constraint {
    constructor(a: PluralRules$Constraint, b: PluralRules$Constraint)
    // private a: PluralRules$Constraint;
    // private b: PluralRules$Constraint;
    isFulfilled(n: PluralRules$IFixedDecimal): boolean;
    isLimited(sampleType: PluralRules$SampleType): boolean;
}