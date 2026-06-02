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
    static getMatrix4x3d(paramarg0: ByteBuffer, paramarg1: Matrix4x3d): Matrix4x3d;
    static getMatrix4x3d(paramarg0: DoubleBuffer): Matrix4x3d;
    static getMatrix4x3d(paramarg0: DoubleBuffer, paramarg1: Matrix4x3d): Matrix4x3d;
    static minus(paramarg0: Matrix4x3dc, paramarg1: Matrix4x3dc): Matrix4x3d;
    static minusAssign(paramarg0: Matrix4x3d, paramarg1: Matrix4x3dc): void;
    static mulComponentWise(paramarg0: Matrix4x3dc, paramarg1: Matrix4x3dc): Matrix4x3d;
    static plus(paramarg0: Matrix4x3dc, paramarg1: Matrix4x3dc): Matrix4x3d;
    static plusAssign(paramarg0: Matrix4x3d, paramarg1: Matrix4x3dc): void;
    static putMatrix4x3d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix4x3d): ByteBuffer;
    static putMatrix4x3d(paramarg0: ByteBuffer, paramarg1: Matrix4x3d): ByteBuffer;
    static putMatrix4x3d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Matrix4x3d): DoubleBuffer;
    static putMatrix4x3d(paramarg0: DoubleBuffer, paramarg1: Matrix4x3d): DoubleBuffer;
    static times(paramarg0: Matrix4x3dc, paramarg1: AxisAngle4d): Matrix4x3d;
    static times(paramarg0: Matrix4x3dc, paramarg1: AxisAngle4f): Matrix4x3d;
    static times(paramarg0: Matrix4x3dc, paramarg1: Matrix4x3dc): Matrix4x3d;
    static times(paramarg0: Matrix4x3dc, paramarg1: Matrix4x3fc): Matrix4x3d;
    static times(paramarg0: Matrix4x3dc, paramarg1: Quaterniondc): Matrix4x3d;
    static times(paramarg0: Matrix4x3dc, paramarg1: Quaternionfc): Matrix4x3d;
    static times(paramarg0: Matrix4x3dc, paramarg1: Vector4dc): Vector4d;
    static timesAssign(paramarg0: Matrix4x3d, paramarg1: AxisAngle4d): void;
    static timesAssign(paramarg0: Matrix4x3d, paramarg1: AxisAngle4f): void;
    static timesAssign(paramarg0: Matrix4x3d, paramarg1: Matrix4x3dc): void;
    static timesAssign(paramarg0: Matrix4x3d, paramarg1: Matrix4x3fc): void;
    static timesAssign(paramarg0: Matrix4x3d, paramarg1: Quaterniondc): void;
    static timesAssign(paramarg0: Matrix4x3d, paramarg1: Quaternionfc): void;
}