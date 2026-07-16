import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UnaryExpression$Op extends Enum<UnaryExpression$Op> {
    static ARITHMETICAL_NEGATION: UnaryExpression$Op;
    static LOGICAL_NEGATION: UnaryExpression$Op;
    static RETURN: UnaryExpression$Op;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UnaryExpression$Op;
    static values(): UnaryExpression$Op[];
    private constructor()
    name(): "LOGICAL_NEGATION" | "ARITHMETICAL_NEGATION" | "RETURN";
}