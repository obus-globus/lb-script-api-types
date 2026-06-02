import type { Expression } from '../../../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../../../kroppeb/stareval/function/Type.d.ts'
import type { FloatSupplier } from '../../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { UniformUpdateFrequency } from '../../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
import type { CachedUniform } from '../../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
export class FloatCachedUniform extends CachedUniform {
    static forExpression(paramarg0: string, paramarg1: Type, paramarg2: Expression, paramarg3: FunctionContext): CachedUniform;
    constructor(arg0: string, arg1: UniformUpdateFrequency, arg2: () => kotlin.Float)
    // private cached: number;
    // private supplier: () => kotlin.Float;
    doUpdate(): boolean;
    getType(): Type;
    push(arg0: number): void;
    writeTo(arg0: FunctionReturn): void;
}