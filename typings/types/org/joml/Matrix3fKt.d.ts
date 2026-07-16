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
    static getMatrix3f(self: ByteBuffer, v: Matrix3f): Matrix3f;
    static getMatrix3f(self: FloatBuffer): Matrix3f;
    static getMatrix3f(self: FloatBuffer, v: Matrix3f): Matrix3f;
    static minus(self: Matrix3fc, m: Matrix3fc): Matrix3f;
    static minusAssign(self: Matrix3f, m: Matrix3fc): void;
    static mulComponentWise(self: Matrix3fc, m: Matrix3fc): Matrix3f;
    static plus(self: Matrix3fc, m: Matrix3fc): Matrix3f;
    static plusAssign(self: Matrix3f, m: Matrix3fc): void;
    static putMatrix3f(self: ByteBuffer, index: number, v: Matrix3f): ByteBuffer;
    static putMatrix3f(self: ByteBuffer, v: Matrix3f): ByteBuffer;
    static putMatrix3f(self: FloatBuffer, index: number, v: Matrix3f): FloatBuffer;
    static putMatrix3f(self: FloatBuffer, v: Matrix3f): FloatBuffer;
    static times(self: Matrix3fc, a: AxisAngle4f): Matrix3f;
    static times(self: Matrix3fc, m: Matrix3fc): Matrix3f;
    static times(self: Matrix3fc, q: Quaternionfc): Matrix3f;
    static times(self: Matrix3fc, v: Vector3fc): Vector3f;
    static timesAssign(self: Matrix3f, a: AxisAngle4f): void;
    static timesAssign(self: Matrix3f, m: Matrix3fc): void;
    static timesAssign(self: Matrix3f, q: Quaternionfc): void;
}