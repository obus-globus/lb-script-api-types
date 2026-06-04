import type { Object } from '../../../java/lang/Object.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { TypedFunction } from '../../../kroppeb/stareval/function/TypedFunction.d.ts'
export class CallExpression extends Object implements Expression {
    constructor(arg0: TypedFunction, arg1: Expression[])
    // private arguments: Expression[];
    // private function: TypedFunction;
    evaluateTo(arg0: FunctionContext, arg1: FunctionReturn): void;
    // private isConstant(): boolean;
    listVariables(arg0: E[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}