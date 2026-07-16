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
    static getMatrix4x3f(self: ByteBuffer, v: Matrix4x3f): Matrix4x3f;
    static getMatrix4x3f(self: FloatBuffer): Matrix4x3f;
    static getMatrix4x3f(self: FloatBuffer, v: Matrix4x3f): Matrix4x3f;
    static minus(self: Matrix4x3fc, m: Matrix4x3fc): Matrix4x3f;
    static minusAssign(self: Matrix4x3f, m: Matrix4x3fc): void;
    static mulComponentWise(self: Matrix4x3fc, m: Matrix4x3fc): Matrix4x3f;
    static plus(self: Matrix4x3fc, m: Matrix4x3fc): Matrix4x3f;
    static plusAssign(self: Matrix4x3f, m: Matrix4x3fc): void;
    static putMatrix4x3f(self: ByteBuffer, index: number, v: Matrix4x3f): ByteBuffer;
    static putMatrix4x3f(self: ByteBuffer, v: Matrix4x3f): ByteBuffer;
    static putMatrix4x3f(self: FloatBuffer, index: number, v: Matrix4x3f): FloatBuffer;
    static putMatrix4x3f(self: FloatBuffer, v: Matrix4x3f): FloatBuffer;
    static times(self: Matrix4x3fc, a: AxisAngle4f): Matrix4x3f;
    static times(self: Matrix4x3fc, m: Matrix4x3fc): Matrix4x3f;
    static times(self: Matrix4x3fc, q: Quaternionfc): Matrix4x3f;
    static times(self: Matrix4x3fc, v: Vector4fc): Vector4f;
    static timesAssign(self: Matrix4x3f, a: AxisAngle4f): void;
    static timesAssign(self: Matrix4x3f, m: Matrix4x3fc): void;
    static timesAssign(self: Matrix4x3f, q: Quaternionfc): void;
}