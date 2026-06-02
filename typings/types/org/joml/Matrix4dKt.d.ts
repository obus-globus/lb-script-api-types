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
    static getMatrix4d(paramarg0: ByteBuffer, paramarg1: Matrix4d): Matrix4d;
    static getMatrix4d(paramarg0: DoubleBuffer): Matrix4d;
    static getMatrix4d(paramarg0: DoubleBuffer, paramarg1: Matrix4d): Matrix4d;
    static minus(paramarg0: Matrix4dc, paramarg1: Matrix4dc): Matrix4d;
    static minusAssign(paramarg0: Matrix4d, paramarg1: Matrix4dc): void;
    static mulComponentWise(paramarg0: Matrix4dc, paramarg1: Matrix4dc): Matrix4d;
    static plus(paramarg0: Matrix4dc, paramarg1: Matrix4dc): Matrix4d;
    static plusAssign(paramarg0: Matrix4d, paramarg1: Matrix4dc): void;
    static putMatrix4d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix4d): ByteBuffer;
    static putMatrix4d(paramarg0: ByteBuffer, paramarg1: Matrix4d): ByteBuffer;
    static putMatrix4d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Matrix4d): DoubleBuffer;
    static putMatrix4d(paramarg0: DoubleBuffer, paramarg1: Matrix4d): DoubleBuffer;
    static times(paramarg0: Matrix4dc, paramarg1: AxisAngle4d): Matrix4d;
    static times(paramarg0: Matrix4dc, paramarg1: AxisAngle4f): Matrix4d;
    static times(paramarg0: Matrix4dc, paramarg1: Matrix4dc): Matrix4d;
    static times(paramarg0: Matrix4dc, paramarg1: Matrix4fc): Matrix4d;
    static times(paramarg0: Matrix4dc, paramarg1: Quaterniondc): Matrix4d;
    static times(paramarg0: Matrix4dc, paramarg1: Quaternionfc): Matrix4d;
    static times(paramarg0: Matrix4dc, paramarg1: Vector4dc): Vector4d;
    static timesAssign(paramarg0: Matrix4d, paramarg1: AxisAngle4d): void;
    static timesAssign(paramarg0: Matrix4d, paramarg1: AxisAngle4f): void;
    static timesAssign(paramarg0: Matrix4d, paramarg1: Matrix4dc): void;
    static timesAssign(paramarg0: Matrix4d, paramarg1: Matrix4fc): void;
    static timesAssign(paramarg0: Matrix4d, paramarg1: Quaterniondc): void;
    static timesAssign(paramarg0: Matrix4d, paramarg1: Quaternionfc): void;
}