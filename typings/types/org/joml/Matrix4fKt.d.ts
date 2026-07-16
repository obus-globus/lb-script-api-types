import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Matrix4fKt extends Object {
    static getMatrix4f(self: ByteBuffer, v: Matrix4f): Matrix4f;
    static getMatrix4f(self: FloatBuffer): Matrix4f;
    static getMatrix4f(self: FloatBuffer, v: Matrix4f): Matrix4f;
    static minus(self: Matrix4fc, m: Matrix4fc): Matrix4f;
    static minusAssign(self: Matrix4f, m: Matrix4fc): void;
    static mulComponentWise(self: Matrix4fc, m: Matrix4fc): Matrix4f;
    static plus(self: Matrix4fc, m: Matrix4fc): Matrix4f;
    static plusAssign(self: Matrix4f, m: Matrix4fc): void;
    static putMatrix4f(self: ByteBuffer, index: number, v: Matrix4f): ByteBuffer;
    static putMatrix4f(self: ByteBuffer, v: Matrix4f): ByteBuffer;
    static putMatrix4f(self: FloatBuffer, index: number, v: Matrix4f): FloatBuffer;
    static putMatrix4f(self: FloatBuffer, v: Matrix4f): FloatBuffer;
    static times(self: Matrix4fc, a: AxisAngle4f): Matrix4f;
    static times(self: Matrix4fc, m: Matrix4fc): Matrix4f;
    static times(self: Matrix4fc, q: Quaternionfc): Matrix4f;
    static times(self: Matrix4fc, v: Vector4fc): Vector4f;
    static timesAssign(self: Matrix4f, a: AxisAngle4f): void;
    static timesAssign(self: Matrix4f, m: Matrix4fc): void;
    static timesAssign(self: Matrix4f, q: Quaternionfc): void;
}