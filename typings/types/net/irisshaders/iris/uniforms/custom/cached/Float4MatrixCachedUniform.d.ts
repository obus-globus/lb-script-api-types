import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Expression } from '../../../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { Type } from '../../../../../../kroppeb/stareval/function/Type.d.ts'
import type { UniformUpdateFrequency } from '../../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
import type { MatrixType } from '../../../../../../net/irisshaders/iris/parsing/MatrixType.d.ts'
import type { CachedUniform } from '../../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
import type { VectorCachedUniform } from '../../../../../../net/irisshaders/iris/uniforms/custom/cached/VectorCachedUniform.d.ts'
import type { Matrix4f } from '../../../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class Float4MatrixCachedUniform extends VectorCachedUniform<Matrix4fc> {
    static forExpression(paramarg0: string, paramarg1: Type, paramarg2: Expression, paramarg3: FunctionContext): CachedUniform;
    constructor(arg0: string, arg1: UniformUpdateFrequency, arg2: () => Matrix4fc)
    // private buffer: number[];
    getType(): MatrixType<Matrix4f>;
    push(arg0: number): void;
    setFrom(arg0: Matrix4fc): void;
}