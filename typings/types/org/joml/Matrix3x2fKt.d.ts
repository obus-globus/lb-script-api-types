import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Matrix3x2fKt extends Object {
    static getMatrix3x2f(self: ByteBuffer, v: Matrix3x2f): Matrix3x2f;
    static getMatrix3x2f(self: FloatBuffer): Matrix3x2f;
    static getMatrix3x2f(self: FloatBuffer, v: Matrix3x2f): Matrix3x2f;
    static putMatrix3x2f(self: ByteBuffer, index: number, v: Matrix3x2f): ByteBuffer;
    static putMatrix3x2f(self: ByteBuffer, v: Matrix3x2f): ByteBuffer;
    static putMatrix3x2f(self: FloatBuffer, index: number, v: Matrix3x2f): FloatBuffer;
    static putMatrix3x2f(self: FloatBuffer, v: Matrix3x2f): FloatBuffer;
    static times(self: Matrix3x2fc, m: Matrix3x2fc): Matrix3x2f;
    static times(self: Matrix3x2fc, v: Vector3fc): Vector3f;
    static timesAssign(self: Matrix3x2f, m: Matrix3x2fc): void;
}