import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LambdaExpressionTree$BodyKind extends Enum<LambdaExpressionTree$BodyKind> {
    static EXPRESSION: LambdaExpressionTree$BodyKind;
    static STATEMENT: LambdaExpressionTree$BodyKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LambdaExpressionTree$BodyKind;
    static values(): LambdaExpressionTree$BodyKind[];
    private constructor()
    name(): "EXPRESSION" | "STATEMENT";
}