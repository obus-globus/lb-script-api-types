import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Matrix3x2fKt extends Object {
    static getMatrix3x2f(paramarg0: ByteBuffer, paramarg1: Matrix3x2f): Matrix3x2f;
    static getMatrix3x2f(paramarg0: FloatBuffer): Matrix3x2f;
    static getMatrix3x2f(paramarg0: FloatBuffer, paramarg1: Matrix3x2f): Matrix3x2f;
    static putMatrix3x2f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix3x2f): ByteBuffer;
    static putMatrix3x2f(paramarg0: ByteBuffer, paramarg1: Matrix3x2f): ByteBuffer;
    static putMatrix3x2f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Matrix3x2f): FloatBuffer;
    static putMatrix3x2f(paramarg0: FloatBuffer, paramarg1: Matrix3x2f): FloatBuffer;
    static times(paramarg0: Matrix3x2fc, paramarg1: Matrix3x2fc): Matrix3x2f;
    static times(paramarg0: Matrix3x2fc, paramarg1: Vector3fc): Vector3f;
    static timesAssign(paramarg0: Matrix3x2f, paramarg1: Matrix3x2fc): void;
}