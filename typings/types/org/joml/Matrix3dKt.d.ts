import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Matrix3dKt extends Object {
    static getMatrix3d(self: ByteBuffer, v: Matrix3d): Matrix3d;
    static getMatrix3d(self: DoubleBuffer): Matrix3d;
    static getMatrix3d(self: DoubleBuffer, v: Matrix3d): Matrix3d;
    static minus(self: Matrix3dc, m: Matrix3dc): Matrix3d;
    static minusAssign(self: Matrix3d, m: Matrix3dc): void;
    static mulComponentWise(self: Matrix3dc, m: Matrix3dc): Matrix3d;
    static plus(self: Matrix3dc, m: Matrix3dc): Matrix3d;
    static plusAssign(self: Matrix3d, m: Matrix3dc): void;
    static putMatrix3d(self: ByteBuffer, index: number, v: Matrix3d): ByteBuffer;
    static putMatrix3d(self: ByteBuffer, v: Matrix3d): ByteBuffer;
    static putMatrix3d(self: DoubleBuffer, index: number, v: Matrix3d): DoubleBuffer;
    static putMatrix3d(self: DoubleBuffer, v: Matrix3d): DoubleBuffer;
    static times(self: Matrix3dc, a: AxisAngle4d): Matrix3d;
    static times(self: Matrix3dc, a: AxisAngle4f): Matrix3d;
    static times(self: Matrix3dc, m: Matrix3dc): Matrix3d;
    static times(self: Matrix3dc, m: Matrix3fc): Matrix3d;
    static times(self: Matrix3dc, q: Quaterniondc): Matrix3d;
    static times(self: Matrix3dc, q: Quaternionfc): Matrix3d;
    static times(self: Matrix3dc, v: Vector3dc): Vector3d;
    static times(self: Matrix3dc, v: Vector3fc): Vector3f;
    static timesAssign(self: Matrix3d, a: AxisAngle4d): void;
    static timesAssign(self: Matrix3d, a: AxisAngle4f): void;
    static timesAssign(self: Matrix3d, m: Matrix3dc): void;
    static timesAssign(self: Matrix3d, m: Matrix3fc): void;
    static timesAssign(self: Matrix3d, q: Quaterniondc): void;
    static timesAssign(self: Matrix3d, q: Quaternionfc): void;
}