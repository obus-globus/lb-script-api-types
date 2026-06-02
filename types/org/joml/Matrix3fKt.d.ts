import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Matrix3fKt extends Object {
    static getMatrix3f(paramarg0: ByteBuffer, paramarg1: Matrix3f): Matrix3f;
    static getMatrix3f(paramarg0: FloatBuffer): Matrix3f;
    static getMatrix3f(paramarg0: FloatBuffer, paramarg1: Matrix3f): Matrix3f;
    static minus(paramarg0: Matrix3fc, paramarg1: Matrix3fc): Matrix3f;
    static minusAssign(paramarg0: Matrix3f, paramarg1: Matrix3fc): void;
    static mulComponentWise(paramarg0: Matrix3fc, paramarg1: Matrix3fc): Matrix3f;
    static plus(paramarg0: Matrix3fc, paramarg1: Matrix3fc): Matrix3f;
    static plusAssign(paramarg0: Matrix3f, paramarg1: Matrix3fc): void;
    static putMatrix3f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix3f): ByteBuffer;
    static putMatrix3f(paramarg0: ByteBuffer, paramarg1: Matrix3f): ByteBuffer;
    static putMatrix3f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Matrix3f): FloatBuffer;
    static putMatrix3f(paramarg0: FloatBuffer, paramarg1: Matrix3f): FloatBuffer;
    static times(paramarg0: Matrix3fc, paramarg1: AxisAngle4f): Matrix3f;
    static times(paramarg0: Matrix3fc, paramarg1: Matrix3fc): Matrix3f;
    static times(paramarg0: Matrix3fc, paramarg1: Quaternionfc): Matrix3f;
    static times(paramarg0: Matrix3fc, paramarg1: Vector3fc): Vector3f;
    static timesAssign(paramarg0: Matrix3f, paramarg1: AxisAngle4f): void;
    static timesAssign(paramarg0: Matrix3f, paramarg1: Matrix3fc): void;
    static timesAssign(paramarg0: Matrix3f, paramarg1: Quaternionfc): void;
}