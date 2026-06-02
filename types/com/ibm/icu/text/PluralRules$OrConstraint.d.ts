import type { PluralRules$BinaryConstraint } from '../../../../com/ibm/icu/text/PluralRules$BinaryConstraint.d.ts'
import type { PluralRules$Constraint } from '../../../../com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
export class PluralRules$OrConstraint extends PluralRules$BinaryConstraint {
    constructor(arg0: PluralRules$Constraint, arg1: PluralRules$Constraint)
    isFulfilled(arg0: PluralRules$IFixedDecimal): boolean;
    isLimited(arg0: PluralRules$SampleType): boolean;
    toString(): string;
}