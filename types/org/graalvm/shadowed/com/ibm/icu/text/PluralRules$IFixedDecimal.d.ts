import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralRules$Operand } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Operand.d.ts'
export interface PluralRules$IFixedDecimal extends Object{
    getPluralOperand(operand: PluralRules$Operand): number;
    isHasIntegerValue(): boolean;
    isInfinite(): boolean;
    isNaN(): boolean;
}