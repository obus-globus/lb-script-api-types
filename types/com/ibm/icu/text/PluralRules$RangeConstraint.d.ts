import type { PluralRules$Constraint } from '../../../../com/ibm/icu/text/PluralRules$Constraint.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$Operand } from '../../../../com/ibm/icu/text/PluralRules$Operand.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluralRules$RangeConstraint extends Object implements PluralRules$Constraint, Serializable {
    constructor(arg0: number, arg1: boolean, arg2: PluralRules$Operand, arg3: boolean, arg4: number, arg5: number, arg6: number[])
    // private inRange: boolean;
    // private integersOnly: boolean;
    // private lowerBound: number;
    // private mod: number;
    // private operand: PluralRules$Operand;
    // private range_list: number[];
    // private upperBound: number;
    isFulfilled(arg0: PluralRules$IFixedDecimal): boolean;
    isLimited(arg0: PluralRules$SampleType): boolean;
    toString(): string;
}