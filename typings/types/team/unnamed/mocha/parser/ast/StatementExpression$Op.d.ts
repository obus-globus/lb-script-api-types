import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StatementExpression$Op extends Enum<StatementExpression$Op> {
    static BREAK: StatementExpression$Op;
    static CONTINUE: StatementExpression$Op;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StatementExpression$Op;
    static values(): StatementExpression$Op[];
    private constructor()
    name(): "BREAK" | "CONTINUE";
}