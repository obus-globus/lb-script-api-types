import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3x2d } from '../../org/joml/Matrix3x2d.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
export class Matrix3x2dKt extends Object {
    static getMatrix3x2d(self: ByteBuffer, v: Matrix3x2d): Matrix3x2d;
    static getMatrix3x2d(self: DoubleBuffer): Matrix3x2d;
    static getMatrix3x2d(self: DoubleBuffer, v: Matrix3x2d): Matrix3x2d;
    static putMatrix3x2d(self: ByteBuffer, index: number, v: Matrix3x2d): ByteBuffer;
    static putMatrix3x2d(self: ByteBuffer, v: Matrix3x2d): ByteBuffer;
    static putMatrix3x2d(self: DoubleBuffer, index: number, v: Matrix3x2d): DoubleBuffer;
    static putMatrix3x2d(self: DoubleBuffer, v: Matrix3x2d): DoubleBuffer;
    static times(self: Matrix3x2dc, m: Matrix3x2dc): Matrix3x2d;
    static times(self: Matrix3x2dc, v: Vector3dc): Vector3d;
    static timesAssign(self: Matrix3x2d, m: Matrix3x2dc): void;
}