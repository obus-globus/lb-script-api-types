import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export class Vector2fKt extends Object {
    static angle(self: Vector2fc, v: Vector2fc): number;
    static component1(self: Vector2fc): number;
    static component2(self: Vector2fc): number;
    static distance(self: Vector2fc, v: Vector2fc): number;
    static distanceSquared(self: Vector2fc, v: Vector2fc): number;
    static div(self: Vector2fc, s: number): Vector2f;
    static div(self: Vector2fc, v: Vector2fc): Vector2f;
    static divAssign(self: Vector2f, s: number): void;
    static divAssign(self: Vector2f, v: Vector2fc): void;
    static dot(self: Vector2fc, v: Vector2fc): number;
    static getVector2f(self: ByteBuffer): Vector2f;
    static getVector2f(self: ByteBuffer, index: number): Vector2f;
    static getVector2f(self: ByteBuffer, index: number, v: Vector2f): Vector2f;
    static getVector2f(self: ByteBuffer, v: Vector2f): Vector2f;
    static getVector2f(self: FloatBuffer): Vector2f;
    static getVector2f(self: FloatBuffer, index: number): Vector2f;
    static getVector2f(self: FloatBuffer, index: number, v: Vector2f): Vector2f;
    static getVector2f(self: FloatBuffer, v: Vector2f): Vector2f;
    static minus(self: Vector2fc, v: Vector2fc): Vector2f;
    static minusAssign(self: Vector2f, v: Vector2fc): void;
    static plus(self: Vector2fc, v: Vector2fc): Vector2f;
    static plusAssign(self: Vector2f, v: Vector2fc): void;
    static putVector2f(self: ByteBuffer, index: number, v: Vector2f): ByteBuffer;
    static putVector2f(self: ByteBuffer, v: Vector2f): ByteBuffer;
    static putVector2f(self: FloatBuffer, index: number, v: Vector2f): FloatBuffer;
    static putVector2f(self: FloatBuffer, v: Vector2f): FloatBuffer;
    static times(self: Vector2fc, s: number): Vector2f;
    static times(self: Vector2fc, m: Matrix2fc): Vector2f;
    static times(self: Vector2fc, v: Vector2fc): Vector2f;
    static timesAssign(self: Vector2f, s: number): void;
    static timesAssign(self: Vector2f, m: Matrix2fc): void;
    static timesAssign(self: Vector2f, v: Vector2fc): void;
    static unaryMinus(self: Vector2fc): Vector2f;
}