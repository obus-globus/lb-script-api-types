import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix4x3d } from '../../org/joml/Matrix4x3d.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
export class Matrix4x3dKt extends Object {
    static getMatrix4x3d(self: ByteBuffer, v: Matrix4x3d): Matrix4x3d;
    static getMatrix4x3d(self: DoubleBuffer): Matrix4x3d;
    static getMatrix4x3d(self: DoubleBuffer, v: Matrix4x3d): Matrix4x3d;
    static minus(self: Matrix4x3dc, m: Matrix4x3dc): Matrix4x3d;
    static minusAssign(self: Matrix4x3d, m: Matrix4x3dc): void;
    static mulComponentWise(self: Matrix4x3dc, m: Matrix4x3dc): Matrix4x3d;
    static plus(self: Matrix4x3dc, m: Matrix4x3dc): Matrix4x3d;
    static plusAssign(self: Matrix4x3d, m: Matrix4x3dc): void;
    static putMatrix4x3d(self: ByteBuffer, index: number, v: Matrix4x3d): ByteBuffer;
    static putMatrix4x3d(self: ByteBuffer, v: Matrix4x3d): ByteBuffer;
    static putMatrix4x3d(self: DoubleBuffer, index: number, v: Matrix4x3d): DoubleBuffer;
    static putMatrix4x3d(self: DoubleBuffer, v: Matrix4x3d): DoubleBuffer;
    static times(self: Matrix4x3dc, a: AxisAngle4d): Matrix4x3d;
    static times(self: Matrix4x3dc, a: AxisAngle4f): Matrix4x3d;
    static times(self: Matrix4x3dc, m: Matrix4x3dc): Matrix4x3d;
    static times(self: Matrix4x3dc, m: Matrix4x3fc): Matrix4x3d;
    static times(self: Matrix4x3dc, q: Quaterniondc): Matrix4x3d;
    static times(self: Matrix4x3dc, q: Quaternionfc): Matrix4x3d;
    static times(self: Matrix4x3dc, v: Vector4dc): Vector4d;
    static timesAssign(self: Matrix4x3d, a: AxisAngle4d): void;
    static timesAssign(self: Matrix4x3d, a: AxisAngle4f): void;
    static timesAssign(self: Matrix4x3d, m: Matrix4x3dc): void;
    static timesAssign(self: Matrix4x3d, m: Matrix4x3fc): void;
    static timesAssign(self: Matrix4x3d, q: Quaterniondc): void;
    static timesAssign(self: Matrix4x3d, q: Quaternionfc): void;
}