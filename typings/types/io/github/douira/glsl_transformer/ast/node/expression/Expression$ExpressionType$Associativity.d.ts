import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Expression$ExpressionType$Associativity extends Enum<Expression$ExpressionType$Associativity> {
    static LTR: Expression$ExpressionType$Associativity;
    static RTL: Expression$ExpressionType$Associativity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Expression$ExpressionType$Associativity;
    static values(): Expression$ExpressionType$Associativity[];
    private constructor()
    name(): "LTR" | "RTL";
}