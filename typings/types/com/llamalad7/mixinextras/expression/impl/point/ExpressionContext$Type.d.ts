import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ExpressionContext$Type extends Enum<ExpressionContext$Type> {
    static CUSTOM: ExpressionContext$Type;
    static INJECT: ExpressionContext$Type;
    static MODIFY_ARG: ExpressionContext$Type;
    static MODIFY_ARGS: ExpressionContext$Type;
    static MODIFY_CONSTANT: ExpressionContext$Type;
    static MODIFY_EXPRESSION_VALUE: ExpressionContext$Type;
    static MODIFY_RECEIVER: ExpressionContext$Type;
    static MODIFY_RETURN_VALUE: ExpressionContext$Type;
    static MODIFY_VARIABLE: ExpressionContext$Type;
    static REDIRECT: ExpressionContext$Type;
    static SLICE: ExpressionContext$Type;
    static WRAP_OPERATION: ExpressionContext$Type;
    static WRAP_WITH_CONDITION: ExpressionContext$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExpressionContext$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "CUSTOM" | "INJECT" | "MODIFY_ARG" | "MODIFY_ARGS" | "MODIFY_CONSTANT" | "MODIFY_EXPRESSION_VALUE" | "MODIFY_RECEIVER" | "MODIFY_RETURN_VALUE" | "MODIFY_VARIABLE" | "REDIRECT" | "SLICE" | "WRAP_OPERATION" | "WRAP_WITH_CONDITION";
}