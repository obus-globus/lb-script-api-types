import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../kroppeb/stareval/function/Type.d.ts'
import type { TypedFunction } from '../../../../kroppeb/stareval/function/TypedFunction.d.ts'
import type { TypedFunction$Parameter } from '../../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
import type { VectorType$ArrayVector } from '../../../../net/irisshaders/iris/parsing/VectorType$ArrayVector.d.ts'
import type { VectorType$ArrayVector$IntObjectObjectObjectConsumer } from '../../../../net/irisshaders/iris/parsing/VectorType$ArrayVector$IntObjectObjectObjectConsumer.d.ts'
import type { VectorizedFunction$ElementAccessExpression } from '../../../../net/irisshaders/iris/parsing/VectorizedFunction$ElementAccessExpression.d.ts'
export class VectorizedFunction extends Object implements TypedFunction {
    static format(paramarg0: TypedFunction, paramarg1: string): string;
    constructor(arg0: TypedFunction, arg1: number)
    // private index: number;
    // private inner: TypedFunction;
    // private mapper: VectorType$ArrayVector$IntObjectObjectObjectConsumer<VectorizedFunction, FunctionContext, FunctionReturn>;
    readonly parameters: TypedFunction$Parameter[];
    readonly returnType: VectorType$ArrayVector;
    // private size: number;
    // private vectorAccessors: VectorizedFunction$ElementAccessExpression[];
    evaluateTo(arg0: Expression[], arg1: FunctionContext, arg2: FunctionReturn): void;
    getParameters(): TypedFunction$Parameter[];
    getReturnType(): Type;
    isPure(): boolean;
    priority(): number;
}