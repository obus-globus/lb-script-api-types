import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { VariableExpression } from '../../../../kroppeb/stareval/expression/VariableExpression.d.ts'
import type { FunctionContext } from '../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../kroppeb/stareval/function/Type.d.ts'
import type { BooleanVectorizedFunction } from '../../../../net/irisshaders/iris/parsing/BooleanVectorizedFunction.d.ts'
export class BooleanVectorizedFunction$ElementAccessExpression extends Object implements Expression {
    constructor(null_: BooleanVectorizedFunction, arg1: Type)
    // private parameterType: Type;
    // private vector: Object;
    evaluateTo(arg0: FunctionContext, arg1: FunctionReturn): void;
    listVariables(arg0: VariableExpression[]): void;
    partialEval(arg0: FunctionContext, arg1: FunctionReturn): Expression;
}