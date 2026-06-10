import type { Object } from '../../../java/lang/Object.d.ts'
import type { VariableExpression } from '../../../kroppeb/stareval/expression/VariableExpression.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
export interface Expression extends Object{
    evaluateTo(arg0: FunctionContext, arg1: FunctionReturn): void;
    listVariables(arg0: VariableExpression[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}