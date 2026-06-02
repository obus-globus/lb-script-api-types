import type { Expression } from '../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { AbstractTypedFunction } from '../../../../kroppeb/stareval/function/AbstractTypedFunction.d.ts'
import type { FunctionContext } from '../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../kroppeb/stareval/function/Type.d.ts'
import type { VectorType$ArrayVector } from '../../../../net/irisshaders/iris/parsing/VectorType$ArrayVector.d.ts'
export class VectorConstructor extends AbstractTypedFunction {
    constructor(arg0: Type, arg1: number)
    evaluateTo(arg0: Expression[], arg1: FunctionContext, arg2: FunctionReturn): void;
    getReturnType(): VectorType$ArrayVector;
}