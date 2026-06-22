import type { PluralRules$Constraint } from '../../../../com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PluralRules$BinaryConstraint extends Object implements PluralRules$Constraint, Serializable {
    constructor(arg0: PluralRules$Constraint, arg1: PluralRules$Constraint)
    // private a: PluralRules$Constraint;
    // private b: PluralRules$Constraint;
    isFulfilled(arg0: PluralRules$IFixedDecimal): boolean;
    isLimited(arg0: PluralRules$SampleType): boolean;
}