import type { Object } from '../../../java/lang/Object.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
import type { VariableExpression } from '../../../kroppeb/stareval/expression/VariableExpression.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
export abstract class ConstantExpression extends Object implements Expression {
    constructor(arg0: Type)
    readonly type: Type;
    getType(): Type;
    listVariables(arg0: VariableExpression[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}