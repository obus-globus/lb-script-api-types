import type { PluralRules$Operand } from '../../../../com/ibm/icu/text/PluralRules$Operand.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PluralRules$IFixedDecimal extends Object{
    getPluralOperand(arg0: PluralRules$Operand): number;
    isHasIntegerValue(): boolean;
    isInfinite(): boolean;
    isNaN(): boolean;
}