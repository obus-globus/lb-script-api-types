import type { PluralRules$BinaryConstraint } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$BinaryConstraint.d.ts'
import type { PluralRules$Constraint } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
export class PluralRules$AndConstraint extends PluralRules$BinaryConstraint {
    constructor(a: PluralRules$Constraint, b: PluralRules$Constraint)
    isFulfilled(n: PluralRules$IFixedDecimal): boolean;
    isLimited(sampleType: PluralRules$SampleType): boolean;
    toString(): string;
}