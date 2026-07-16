import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export class Vector2dKt extends Object {
    static angle(self: Vector2dc, v: Vector2dc): number;
    static component1(self: Vector2dc): number;
    static component2(self: Vector2dc): number;
    static distance(self: Vector2dc, v: Vector2dc): number;
    static distance(self: Vector2dc, v: Vector2fc): number;
    static distanceSquared(self: Vector2dc, v: Vector2dc): number;
    static distanceSquared(self: Vector2dc, v: Vector2fc): number;
    static div(self: Vector2dc, v: Vector2dc): Vector2d;
    static div(self: Vector2dc, v: Vector2fc): Vector2d;
    static divAssign(self: Vector2d, v: Vector2dc): void;
    static divAssign(self: Vector2d, v: Vector2fc): void;
    static dot(self: Vector2dc, v: Vector2dc): number;
    static getVector2d(self: ByteBuffer): Vector2d;
    static getVector2d(self: ByteBuffer, index: number): Vector2d;
    static getVector2d(self: ByteBuffer, index: number, v: Vector2d): Vector2d;
    static getVector2d(self: ByteBuffer, v: Vector2d): Vector2d;
    static getVector2d(self: DoubleBuffer): Vector2d;
    static getVector2d(self: DoubleBuffer, index: number): Vector2d;
    static getVector2d(self: DoubleBuffer, index: number, v: Vector2d): Vector2d;
    static getVector2d(self: DoubleBuffer, v: Vector2d): Vector2d;
    static minus(self: Vector2dc, v: Vector2dc): Vector2d;
    static minus(self: Vector2dc, v: Vector2fc): Vector2d;
    static minusAssign(self: Vector2d, v: Vector2dc): void;
    static minusAssign(self: Vector2d, v: Vector2fc): void;
    static plus(self: Vector2dc, v: Vector2dc): Vector2d;
    static plus(self: Vector2dc, v: Vector2fc): Vector2d;
    static plusAssign(self: Vector2d, v: Vector2dc): void;
    static plusAssign(self: Vector2d, v: Vector2fc): void;
    static putVector2d(self: ByteBuffer, index: number, v: Vector2d): ByteBuffer;
    static putVector2d(self: ByteBuffer, v: Vector2d): ByteBuffer;
    static putVector2d(self: DoubleBuffer, index: number, v: Vector2d): DoubleBuffer;
    static putVector2d(self: DoubleBuffer, v: Vector2d): DoubleBuffer;
    static times(self: Vector2dc, s: number): Vector2d;
    static times(self: Vector2dc, m: Matrix2dc): Vector2d;
    static times(self: Vector2dc, m: Matrix2fc): Vector2d;
    static times(self: Vector2dc, v: Vector2dc): Vector2d;
    static timesAssign(self: Vector2d, s: number): void;
    static timesAssign(self: Vector2d, m: Matrix2dc): void;
    static timesAssign(self: Vector2d, m: Matrix2fc): void;
    static timesAssign(self: Vector2d, v: Vector2dc): void;
    static unaryMinus(self: Vector2dc): Vector2d;
}