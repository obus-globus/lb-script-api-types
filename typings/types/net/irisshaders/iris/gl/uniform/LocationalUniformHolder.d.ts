import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FloatSupplier } from '../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { UniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { UniformType } from '../../../../../net/irisshaders/iris/gl/uniform/UniformType.d.ts'
import type { UniformUpdateFrequency } from '../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../../../../org/joml/Vector2i.d.ts'
import type { Vector3d } from '../../../../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector3i } from '../../../../../org/joml/Vector3i.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export interface LocationalUniformHolder extends Object, UniformHolder {
    addUniform(arg0: UniformUpdateFrequency, arg1: Uniform): LocationalUniformHolder;
    externallyManagedUniform(arg0: string, arg1: UniformType): UniformHolder;
    location(arg0: string, arg1: UniformType): OptionalInt;
    uniform1b(arg0: UniformUpdateFrequency, arg1: string, arg2: () => boolean): LocationalUniformHolder;
    uniform1f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number): LocationalUniformHolder;
    uniform1i(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number): LocationalUniformHolder;
    uniform2f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector2f): LocationalUniformHolder;
    uniform2i(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector2i): LocationalUniformHolder;
    uniform3d(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector3d): LocationalUniformHolder;
    uniform3f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector3f): LocationalUniformHolder;
    uniform3i(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector3i): LocationalUniformHolder;
    uniform4f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector4f): LocationalUniformHolder;
    uniform4fArray(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number[]): LocationalUniformHolder;
    uniformMatrix(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Matrix4fc): LocationalUniformHolder;
    uniformMatrixFromArray(arg0: UniformUpdateFrequency, arg1: string, arg2: () => number[]): LocationalUniformHolder;
    uniformTruncated3f(arg0: UniformUpdateFrequency, arg1: string, arg2: () => Vector4f): LocationalUniformHolder;
}