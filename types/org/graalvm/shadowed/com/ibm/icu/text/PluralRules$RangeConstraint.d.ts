import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralRules$Constraint } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$Operand } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Operand.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
export class PluralRules$RangeConstraint extends Object implements Serializable, PluralRules$Constraint {
    constructor(mod: number, inRange: boolean, operand: PluralRules$Operand, integersOnly: boolean, lowBound: number, highBound: number, vals: number[])
    // private inRange: boolean;
    // private integersOnly: boolean;
    // private lowerBound: number;
    // private mod: number;
    // private operand: PluralRules$Operand;
    // private range_list: number[];
    // private upperBound: number;
    isFulfilled(number: PluralRules$IFixedDecimal): boolean;
    isLimited(sampleType: PluralRules$SampleType): boolean;
    toString(): string;
}