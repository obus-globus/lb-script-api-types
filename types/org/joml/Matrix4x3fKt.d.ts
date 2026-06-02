import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix4x3f } from '../../org/joml/Matrix4x3f.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Matrix4x3fKt extends Object {
    static getMatrix4x3f(paramarg0: ByteBuffer, paramarg1: Matrix4x3f): Matrix4x3f;
    static getMatrix4x3f(paramarg0: FloatBuffer): Matrix4x3f;
    static getMatrix4x3f(paramarg0: FloatBuffer, paramarg1: Matrix4x3f): Matrix4x3f;
    static minus(paramarg0: Matrix4x3fc, paramarg1: Matrix4x3fc): Matrix4x3f;
    static minusAssign(paramarg0: Matrix4x3f, paramarg1: Matrix4x3fc): void;
    static mulComponentWise(paramarg0: Matrix4x3fc, paramarg1: Matrix4x3fc): Matrix4x3f;
    static plus(paramarg0: Matrix4x3fc, paramarg1: Matrix4x3fc): Matrix4x3f;
    static plusAssign(paramarg0: Matrix4x3f, paramarg1: Matrix4x3fc): void;
    static putMatrix4x3f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix4x3f): ByteBuffer;
    static putMatrix4x3f(paramarg0: ByteBuffer, paramarg1: Matrix4x3f): ByteBuffer;
    static putMatrix4x3f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Matrix4x3f): FloatBuffer;
    static putMatrix4x3f(paramarg0: FloatBuffer, paramarg1: Matrix4x3f): FloatBuffer;
    static times(paramarg0: Matrix4x3fc, paramarg1: AxisAngle4f): Matrix4x3f;
    static times(paramarg0: Matrix4x3fc, paramarg1: Matrix4x3fc): Matrix4x3f;
    static times(paramarg0: Matrix4x3fc, paramarg1: Quaternionfc): Matrix4x3f;
    static times(paramarg0: Matrix4x3fc, paramarg1: Vector4fc): Vector4f;
    static timesAssign(paramarg0: Matrix4x3f, paramarg1: AxisAngle4f): void;
    static timesAssign(paramarg0: Matrix4x3f, paramarg1: Matrix4x3fc): void;
    static timesAssign(paramarg0: Matrix4x3f, paramarg1: Quaternionfc): void;
}