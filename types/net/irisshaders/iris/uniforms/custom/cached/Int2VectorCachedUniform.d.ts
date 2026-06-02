import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Expression } from '../../../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../../../kroppeb/stareval/function/Type.d.ts'
import type { UniformUpdateFrequency } from '../../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
import type { VectorType } from '../../../../../../net/irisshaders/iris/parsing/VectorType.d.ts'
import type { CachedUniform } from '../../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
import type { VectorCachedUniform } from '../../../../../../net/irisshaders/iris/uniforms/custom/cached/VectorCachedUniform.d.ts'
import type { Vector2i } from '../../../../../../org/joml/Vector2i.d.ts'
export class Int2VectorCachedUniform extends VectorCachedUniform<Vector2i> {
    static forExpression(paramarg0: string, paramarg1: Type, paramarg2: Expression, paramarg3: FunctionContext): CachedUniform;
    constructor(arg0: string, arg1: UniformUpdateFrequency, arg2: () => Vector2i)
    getType(): VectorType;
    push(arg0: number): void;
    setFrom(arg0: Vector2i): void;
    writeTo(arg0: FunctionReturn): void;
}