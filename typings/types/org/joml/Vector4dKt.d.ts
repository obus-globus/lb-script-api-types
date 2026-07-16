import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Vector4dKt extends Object {
    static angle(self: Vector4dc, v: Vector4dc): number;
    static angleCos(self: Vector4dc, v: Vector4dc): number;
    static component1(self: Vector4dc): number;
    static component2(self: Vector4dc): number;
    static component3(self: Vector4dc): number;
    static component4(self: Vector4dc): number;
    static distance(self: Vector4dc, v: Vector4dc): number;
    static distanceSquared(self: Vector4dc, v: Vector4dc): number;
    static div(self: Vector4dc, s: number): Vector4d;
    static div(self: Vector4dc, v: Vector4dc): Vector4d;
    static divAssign(self: Vector4d, s: number): void;
    static divAssign(self: Vector4d, v: Vector4dc): void;
    static dot(self: Vector4dc, v: Vector4dc): number;
    static getVector4d(self: ByteBuffer): Vector4d;
    static getVector4d(self: ByteBuffer, index: number): Vector4d;
    static getVector4d(self: ByteBuffer, index: number, v: Vector4d): Vector4d;
    static getVector4d(self: ByteBuffer, v: Vector4d): Vector4d;
    static getVector4d(self: DoubleBuffer): Vector4d;
    static getVector4d(self: DoubleBuffer, index: number): Vector4d;
    static getVector4d(self: DoubleBuffer, index: number, v: Vector4d): Vector4d;
    static getVector4d(self: DoubleBuffer, v: Vector4d): Vector4d;
    static minus(self: Vector4dc, v: Vector4dc): Vector4d;
    static minus(self: Vector4dc, v: Vector4fc): Vector4d;
    static minusAssign(self: Vector4d, v: Vector4dc): void;
    static minusAssign(self: Vector4d, v: Vector4fc): void;
    static plus(self: Vector4dc, v: Vector4dc): Vector4d;
    static plus(self: Vector4dc, v: Vector4fc): Vector4d;
    static plusAssign(self: Vector4d, v: Vector4dc): void;
    static plusAssign(self: Vector4d, v: Vector4fc): void;
    static putVector4d(self: ByteBuffer, index: number, v: Vector4d): ByteBuffer;
    static putVector4d(self: ByteBuffer, v: Vector4d): ByteBuffer;
    static putVector4d(self: DoubleBuffer, index: number, v: Vector4d): DoubleBuffer;
    static putVector4d(self: DoubleBuffer, v: Vector4d): DoubleBuffer;
    static times(self: Vector4dc, s: number): Vector4d;
    static times(self: Vector4dc, m: Matrix4dc): Vector4d;
    static times(self: Vector4dc, m: Matrix4fc): Vector4d;
    static times(self: Vector4dc, m: Matrix4x3dc): Vector4d;
    static times(self: Vector4dc, m: Matrix4x3fc): Vector4d;
    static times(self: Vector4dc, v: Vector4dc): Vector4d;
    static times(self: Vector4dc, v: Vector4fc): Vector4d;
    static timesAssign(self: Vector4d, s: number): void;
    static timesAssign(self: Vector4d, m: Matrix4dc): void;
    static timesAssign(self: Vector4d, m: Matrix4fc): void;
    static timesAssign(self: Vector4d, m: Matrix4x3dc): void;
    static timesAssign(self: Vector4d, m: Matrix4x3fc): void;
    static timesAssign(self: Vector4d, v: Vector4dc): void;
    static timesAssign(self: Vector4d, v: Vector4fc): void;
    static unaryMinus(self: Vector4dc): Vector4d;
}