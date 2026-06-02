import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../kroppeb/stareval/function/Type.d.ts'
export class VectorizedFunction$ElementAccessExpression extends Object implements Expression {
    constructor(null_: VectorizedFunction$ElementAccessExpression, arg1: Type)
    // private parameterType: Type;
    // private vector: Object;
    evaluateTo(arg0: FunctionContext, arg1: FunctionReturn): void;
    listVariables(arg0: E[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}