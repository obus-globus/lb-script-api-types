import type { Object } from '../../../java/lang/Object.d.ts'
import type { Expression } from '../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
import type { TypedFunction } from '../../../kroppeb/stareval/function/TypedFunction.d.ts'
import type { TypedFunction$Parameter } from '../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
export interface I2FFunction extends Object, TypedFunction{
    eval(arg0: number): number;
    evaluateTo(arg0: Expression[], arg1: FunctionContext, arg2: FunctionReturn): void;
    getParameters(): TypedFunction$Parameter[];
    getReturnType(): Type;
    isPure(): boolean;
    priority(): number;
}