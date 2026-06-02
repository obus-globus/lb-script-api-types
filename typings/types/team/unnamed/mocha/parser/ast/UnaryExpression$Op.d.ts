import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UnaryExpression$Op extends Enum<UnaryExpression$Op> {
    static ARITHMETICAL_NEGATION: UnaryExpression$Op;
    static LOGICAL_NEGATION: UnaryExpression$Op;
    static RETURN: UnaryExpression$Op;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UnaryExpression$Op;
    static values(): (Object | null)[];
    private constructor()
    name(): "LOGICAL_NEGATION" | "ARITHMETICAL_NEGATION" | "RETURN";
}