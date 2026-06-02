import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../kroppeb/stareval/function/Type.d.ts'
import type { TypedFunction } from '../../../../kroppeb/stareval/function/TypedFunction.d.ts'
import type { TypedFunction$Parameter } from '../../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
import type { BooleanVectorizedFunction$ElementAccessExpression } from '../../../../net/irisshaders/iris/parsing/BooleanVectorizedFunction$ElementAccessExpression.d.ts'
export class BooleanVectorizedFunction extends Object implements TypedFunction {
    static format(paramarg0: TypedFunction, paramarg1: string): string;
    constructor(arg0: TypedFunction, arg1: number)
    // private index: number;
    // private inner: TypedFunction;
    readonly parameters: TypedFunction$Parameter[];
    // private size: number;
    // private vectorAccessors: BooleanVectorizedFunction$ElementAccessExpression[];
    evaluateTo(arg0: Expression[], arg1: FunctionContext, arg2: FunctionReturn): void;
    getParameters(): TypedFunction$Parameter[];
    getReturnType(): Type;
    isPure(): boolean;
    priority(): number;
}