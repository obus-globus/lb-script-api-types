import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../../../kroppeb/stareval/function/Type.d.ts'
import type { UniformUpdateFrequency } from '../../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
import type { CachedUniform } from '../../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
export abstract class VectorCachedUniform<T extends unknown> extends CachedUniform {
    static forExpression(paramarg0: string, paramarg1: Type, paramarg2: Expression, paramarg3: FunctionContext): CachedUniform;
    constructor(arg0: string, arg1: UniformUpdateFrequency, arg2: T, arg3: () => T)
    // private cached: T;
    // private supplier: () => T;
    doUpdate(): boolean;
    getType(): Type;
    setFrom(arg0: T): void;
    writeTo(arg0: FunctionReturn): void;
}