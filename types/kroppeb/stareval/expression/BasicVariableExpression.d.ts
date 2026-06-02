import type { Object } from '../../../java/lang/Object.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
import type { VariableExpression } from '../../../kroppeb/stareval/expression/VariableExpression.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
export class BasicVariableExpression extends Object implements VariableExpression {
    constructor(arg0: string, arg1: Type)
    // private name: string;
    // private type: Type;
    evaluateTo(arg0: FunctionContext, arg1: FunctionReturn): void;
    listVariables(arg0: E[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}