import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LambdaExpressionTree$BodyKind extends Enum<LambdaExpressionTree$BodyKind> {
    static EXPRESSION: LambdaExpressionTree$BodyKind;
    static STATEMENT: LambdaExpressionTree$BodyKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LambdaExpressionTree$BodyKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "EXPRESSION" | "STATEMENT";
}