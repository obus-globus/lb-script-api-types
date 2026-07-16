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
    static angle(self: Vector3dc, v: Vector3dc): number;
    static angleCos(self: Vector3dc, v: Vector3dc): number;
    static component1(self: Vector3dc): number;
    static component2(self: Vector3dc): number;
    static component3(self: Vector3dc): number;
    static cross(self: Vector3dc, v: Vector3dc): Vector3d;
    static distance(self: Vector3dc, v: Vector3dc): number;
    static distanceSquared(self: Vector3dc, v: Vector3dc): number;
    static div(self: Vector3dc, s: number): Vector3d;
    static div(self: Vector3dc, v: Vector3dc): Vector3d;
    static div(self: Vector3dc, v: Vector3fc): Vector3d;
    static divAssign(self: Vector3d, s: number): void;
    static divAssign(self: Vector3d, v: Vector3dc): void;
    static divAssign(self: Vector3d, v: Vector3fc): void;
    static dot(self: Vector3dc, v: Vector3dc): number;
    static getVector3d(self: ByteBuffer): Vector3d;
    static getVector3d(self: ByteBuffer, index: number): Vector3d;
    static getVector3d(self: ByteBuffer, index: number, v: Vector3d): Vector3d;
    static getVector3d(self: ByteBuffer, v: Vector3d): Vector3d;
    static getVector3d(self: DoubleBuffer): Vector3d;
    static getVector3d(self: DoubleBuffer, index: number): Vector3d;
    static getVector3d(self: DoubleBuffer, index: number, v: Vector3d): Vector3d;
    static getVector3d(self: DoubleBuffer, v: Vector3d): Vector3d;
    static minus(self: Vector3dc, v: Vector3dc): Vector3d;
    static minus(self: Vector3dc, v: Vector3fc): Vector3d;
    static minusAssign(self: Vector3d, v: Vector3dc): void;
    static minusAssign(self: Vector3d, v: Vector3fc): void;
    static plus(self: Vector3dc, v: Vector3dc): Vector3d;
    static plus(self: Vector3dc, v: Vector3fc): Vector3d;
    static plusAssign(self: Vector3d, v: Vector3dc): void;
    static plusAssign(self: Vector3d, v: Vector3fc): void;
    static putVector3d(self: ByteBuffer, index: number, v: Vector3d): ByteBuffer;
    static putVector3d(self: ByteBuffer, v: Vector3d): ByteBuffer;
    static putVector3d(self: DoubleBuffer, index: number, v: Vector3d): DoubleBuffer;
    static putVector3d(self: DoubleBuffer, v: Vector3d): DoubleBuffer;
    static times(self: Vector3dc, s: number): Vector3d;
    static times(self: Vector3dc, m: Matrix3dc): Vector3d;
    static times(self: Vector3dc, m: Matrix3fc): Vector3d;
    static times(self: Vector3dc, m: Matrix3x2dc): Vector3d;
    static times(self: Vector3dc, m: Matrix3x2fc): Vector3d;
    static times(self: Vector3dc, v: Vector3dc): Vector3d;
    static times(self: Vector3dc, v: Vector3fc): Vector3d;
    static timesAssign(self: Vector3d, s: number): void;
    static timesAssign(self: Vector3d, m: Matrix3dc): void;
    static timesAssign(self: Vector3d, m: Matrix3fc): void;
    static timesAssign(self: Vector3d, m: Matrix3x2dc): void;
    static timesAssign(self: Vector3d, m: Matrix3x2fc): void;
    static timesAssign(self: Vector3d, v: Vector3dc): void;
    static timesAssign(self: Vector3d, v: Vector3fc): void;
    static unaryMinus(self: Vector3dc): Vector3d;
}