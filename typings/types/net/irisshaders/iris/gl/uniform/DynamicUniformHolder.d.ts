import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { FloatSupplier } from '../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { UniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { Matrix3fc } from '../../../../../org/joml/Matrix3fc.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../../../../org/joml/Vector2i.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
import type { Vector4i } from '../../../../../org/joml/Vector4i.d.ts'
export interface DynamicUniformHolder extends Object, UniformHolder {
    uniform1f(arg0: string, arg1: () => number, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform1i(arg0: string, arg1: () => number, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform2f(arg0: string, arg1: () => Vector2f, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform2i(arg0: string, arg1: () => Vector2i, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform3f(arg0: string, arg1: () => Vector3f, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform4f(arg0: string, arg1: () => Vector4f, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform4fArray(arg0: string, arg1: () => number[], arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniform4i(arg0: string, arg1: () => Vector4i, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniformMatrix(arg0: string, arg1: () => Matrix4fc, arg2: ValueUpdateNotifier): DynamicUniformHolder;
    uniformMatrix3(arg0: string, arg1: () => Matrix3fc, arg2: ValueUpdateNotifier): DynamicUniformHolder;
}