import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Expression$ExpressionType$OperandStructure extends Enum<Expression$ExpressionType$OperandStructure> {
    static BINARY: Expression$ExpressionType$OperandStructure;
    static MANY: Expression$ExpressionType$OperandStructure;
    static NONE: Expression$ExpressionType$OperandStructure;
    static TERNARY: Expression$ExpressionType$OperandStructure;
    static UNARY: Expression$ExpressionType$OperandStructure;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Expression$ExpressionType$OperandStructure;
    static values(): Expression$ExpressionType$OperandStructure[];
    private constructor()
    name(): "NONE" | "UNARY" | "BINARY" | "TERNARY" | "MANY";
}