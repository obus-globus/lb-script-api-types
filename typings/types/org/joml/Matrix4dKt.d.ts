import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
export class Matrix4dKt extends Object {
    static getMatrix4d(self: ByteBuffer, v: Matrix4d): Matrix4d;
    static getMatrix4d(self: DoubleBuffer): Matrix4d;
    static getMatrix4d(self: DoubleBuffer, v: Matrix4d): Matrix4d;
    static minus(self: Matrix4dc, m: Matrix4dc): Matrix4d;
    static minusAssign(self: Matrix4d, m: Matrix4dc): void;
    static mulComponentWise(self: Matrix4dc, m: Matrix4dc): Matrix4d;
    static plus(self: Matrix4dc, m: Matrix4dc): Matrix4d;
    static plusAssign(self: Matrix4d, m: Matrix4dc): void;
    static putMatrix4d(self: ByteBuffer, index: number, v: Matrix4d): ByteBuffer;
    static putMatrix4d(self: ByteBuffer, v: Matrix4d): ByteBuffer;
    static putMatrix4d(self: DoubleBuffer, index: number, v: Matrix4d): DoubleBuffer;
    static putMatrix4d(self: DoubleBuffer, v: Matrix4d): DoubleBuffer;
    static times(self: Matrix4dc, a: AxisAngle4d): Matrix4d;
    static times(self: Matrix4dc, a: AxisAngle4f): Matrix4d;
    static times(self: Matrix4dc, m: Matrix4dc): Matrix4d;
    static times(self: Matrix4dc, m: Matrix4fc): Matrix4d;
    static times(self: Matrix4dc, q: Quaterniondc): Matrix4d;
    static times(self: Matrix4dc, q: Quaternionfc): Matrix4d;
    static times(self: Matrix4dc, v: Vector4dc): Vector4d;
    static timesAssign(self: Matrix4d, a: AxisAngle4d): void;
    static timesAssign(self: Matrix4d, a: AxisAngle4f): void;
    static timesAssign(self: Matrix4d, m: Matrix4dc): void;
    static timesAssign(self: Matrix4d, m: Matrix4fc): void;
    static timesAssign(self: Matrix4d, q: Quaterniondc): void;
    static timesAssign(self: Matrix4d, q: Quaternionfc): void;
}