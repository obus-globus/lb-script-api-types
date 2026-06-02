import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Vector3dKt extends Object {
    static angle(paramarg0: Vector3dc, paramarg1: Vector3dc): number;
    static angleCos(paramarg0: Vector3dc, paramarg1: Vector3dc): number;
    static component1(paramarg0: Vector3dc): number;
    static component2(paramarg0: Vector3dc): number;
    static component3(paramarg0: Vector3dc): number;
    static cross(paramarg0: Vector3dc, paramarg1: Vector3dc): Vector3d;
    static distance(paramarg0: Vector3dc, paramarg1: Vector3dc): number;
    static distanceSquared(paramarg0: Vector3dc, paramarg1: Vector3dc): number;
    static div(paramarg0: Vector3dc, paramarg1: number): Vector3d;
    static div(paramarg0: Vector3dc, paramarg1: Vector3dc): Vector3d;
    static div(paramarg0: Vector3dc, paramarg1: Vector3fc): Vector3d;
    static divAssign(paramarg0: Vector3d, paramarg1: number): void;
    static divAssign(paramarg0: Vector3d, paramarg1: Vector3dc): void;
    static divAssign(paramarg0: Vector3d, paramarg1: Vector3fc): void;
    static dot(paramarg0: Vector3dc, paramarg1: Vector3dc): number;
    static getVector3d(paramarg0: ByteBuffer): Vector3d;
    static getVector3d(paramarg0: ByteBuffer, paramarg1: number): Vector3d;
    static getVector3d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector3d): Vector3d;
    static getVector3d(paramarg0: ByteBuffer, paramarg1: Vector3d): Vector3d;
    static getVector3d(paramarg0: DoubleBuffer): Vector3d;
    static getVector3d(paramarg0: DoubleBuffer, paramarg1: number): Vector3d;
    static getVector3d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Vector3d): Vector3d;
    static getVector3d(paramarg0: DoubleBuffer, paramarg1: Vector3d): Vector3d;
    static minus(paramarg0: Vector3dc, paramarg1: Vector3dc): Vector3d;
    static minus(paramarg0: Vector3dc, paramarg1: Vector3fc): Vector3d;
    static minusAssign(paramarg0: Vector3d, paramarg1: Vector3dc): void;
    static minusAssign(paramarg0: Vector3d, paramarg1: Vector3fc): void;
    static plus(paramarg0: Vector3dc, paramarg1: Vector3dc): Vector3d;
    static plus(paramarg0: Vector3dc, paramarg1: Vector3fc): Vector3d;
    static plusAssign(paramarg0: Vector3d, paramarg1: Vector3dc): void;
    static plusAssign(paramarg0: Vector3d, paramarg1: Vector3fc): void;
    static putVector3d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector3d): ByteBuffer;
    static putVector3d(paramarg0: ByteBuffer, paramarg1: Vector3d): ByteBuffer;
    static putVector3d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Vector3d): DoubleBuffer;
    static putVector3d(paramarg0: DoubleBuffer, paramarg1: Vector3d): DoubleBuffer;
    static times(paramarg0: Vector3dc, paramarg1: number): Vector3d;
    static times(paramarg0: Vector3dc, paramarg1: Matrix3dc): Vector3d;
    static times(paramarg0: Vector3dc, paramarg1: Matrix3fc): Vector3d;
    static times(paramarg0: Vector3dc, paramarg1: Matrix3x2dc): Vector3d;
    static times(paramarg0: Vector3dc, paramarg1: Matrix3x2fc): Vector3d;
    static times(paramarg0: Vector3dc, paramarg1: Vector3dc): Vector3d;
    static times(paramarg0: Vector3dc, paramarg1: Vector3fc): Vector3d;
    static timesAssign(paramarg0: Vector3d, paramarg1: number): void;
    static timesAssign(paramarg0: Vector3d, paramarg1: Matrix3dc): void;
    static timesAssign(paramarg0: Vector3d, paramarg1: Matrix3fc): void;
    static timesAssign(paramarg0: Vector3d, paramarg1: Matrix3x2dc): void;
    static timesAssign(paramarg0: Vector3d, paramarg1: Matrix3x2fc): void;
    static timesAssign(paramarg0: Vector3d, paramarg1: Vector3dc): void;
    static timesAssign(paramarg0: Vector3d, paramarg1: Vector3fc): void;
    static unaryMinus(paramarg0: Vector3dc): Vector3d;
}