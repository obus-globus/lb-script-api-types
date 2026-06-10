import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FloatSupplier } from '../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { UniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { UniformType } from '../../../../../net/irisshaders/iris/gl/uniform/UniformType.d.ts'
import type { UniformUpdateFrequency } from '../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
import type { CustomUniformFixedInputUniformsHolder } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniformFixedInputUniformsHolder.d.ts'
import type { CachedUniform } from '../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../../../../org/joml/Vector2i.d.ts'
import type { Vector3d } from '../../../../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector3i } from '../../../../../org/joml/Vector3i.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export class CustomUniformFixedInputUniformsHolder$Builder extends Object implements UniformHolder {
    constructor()
    // private inputVariables: { [key: string]: CachedUniform };
    build(): CustomUniformFixedInputUniformsHolder;
    externallyManagedUniform(arg0: string, arg1: UniformType): UniformHolder;
    // private put(arg0: string, arg1: CachedUniform): CustomUniformFixedInputUniformsHolder$Builder;
    uniform1b(arg0: UniformUpdateFrequency, arg1: string, arg2: () => boolean): CustomUniformFixedInputUniformsHolder$Builder;
    uniform1f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number): CustomUniformFixedInputUniformsHolder$Builder;
    uniform1i(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number): CustomUniformFixedInputUniformsHolder$Builder;
    uniform2f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector2f): CustomUniformFixedInputUniformsHolder$Builder;
    uniform2i(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector2i): CustomUniformFixedInputUniformsHolder$Builder;
    uniform3d(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector3d): UniformHolder;
    uniform3f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector3f): CustomUniformFixedInputUniformsHolder$Builder;
    uniform3i(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector3i): CustomUniformFixedInputUniformsHolder$Builder;
    uniform4f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector4f): UniformHolder;
    uniform4fArray(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number[]): UniformHolder;
    uniformMatrix(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Matrix4fc): UniformHolder;
    uniformMatrixFromArray(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number[]): UniformHolder;
    uniformTruncated3f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector4f): CustomUniformFixedInputUniformsHolder$Builder;
}