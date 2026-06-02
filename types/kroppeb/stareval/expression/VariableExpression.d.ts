import type { Object } from '../../../java/lang/Object.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
export interface VariableExpression extends Object, Expression{
    listVariables(arg0: E[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}