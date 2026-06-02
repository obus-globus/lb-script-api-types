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
    static getMatrix3d(paramarg0: ByteBuffer, paramarg1: Matrix3d): Matrix3d;
    static getMatrix3d(paramarg0: DoubleBuffer): Matrix3d;
    static getMatrix3d(paramarg0: DoubleBuffer, paramarg1: Matrix3d): Matrix3d;
    static minus(paramarg0: Matrix3dc, paramarg1: Matrix3dc): Matrix3d;
    static minusAssign(paramarg0: Matrix3d, paramarg1: Matrix3dc): void;
    static mulComponentWise(paramarg0: Matrix3dc, paramarg1: Matrix3dc): Matrix3d;
    static plus(paramarg0: Matrix3dc, paramarg1: Matrix3dc): Matrix3d;
    static plusAssign(paramarg0: Matrix3d, paramarg1: Matrix3dc): void;
    static putMatrix3d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix3d): ByteBuffer;
    static putMatrix3d(paramarg0: ByteBuffer, paramarg1: Matrix3d): ByteBuffer;
    static putMatrix3d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Matrix3d): DoubleBuffer;
    static putMatrix3d(paramarg0: DoubleBuffer, paramarg1: Matrix3d): DoubleBuffer;
    static times(paramarg0: Matrix3dc, paramarg1: AxisAngle4d): Matrix3d;
    static times(paramarg0: Matrix3dc, paramarg1: AxisAngle4f): Matrix3d;
    static times(paramarg0: Matrix3dc, paramarg1: Matrix3dc): Matrix3d;
    static times(paramarg0: Matrix3dc, paramarg1: Matrix3fc): Matrix3d;
    static times(paramarg0: Matrix3dc, paramarg1: Quaterniondc): Matrix3d;
    static times(paramarg0: Matrix3dc, paramarg1: Quaternionfc): Matrix3d;
    static times(paramarg0: Matrix3dc, paramarg1: Vector3dc): Vector3d;
    static times(paramarg0: Matrix3dc, paramarg1: Vector3fc): Vector3f;
    static timesAssign(paramarg0: Matrix3d, paramarg1: AxisAngle4d): void;
    static timesAssign(paramarg0: Matrix3d, paramarg1: AxisAngle4f): void;
    static timesAssign(paramarg0: Matrix3d, paramarg1: Matrix3dc): void;
    static timesAssign(paramarg0: Matrix3d, paramarg1: Matrix3fc): void;
    static timesAssign(paramarg0: Matrix3d, paramarg1: Quaterniondc): void;
    static timesAssign(paramarg0: Matrix3d, paramarg1: Quaternionfc): void;
}