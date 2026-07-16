import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UnaryExpression$Operator extends Enum<UnaryExpression$Operator> {
    static BITWISE_NOT: UnaryExpression$Operator;
    static MINUS: UnaryExpression$Operator;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UnaryExpression$Operator;
    static values(): UnaryExpression$Operator[];
    private constructor()
    name(): "MINUS" | "BITWISE_NOT";
}