import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export class Vector2fKt extends Object {
    static angle(paramarg0: Vector2fc, paramarg1: Vector2fc): number;
    static component1(paramarg0: Vector2fc): number;
    static component2(paramarg0: Vector2fc): number;
    static distance(paramarg0: Vector2fc, paramarg1: Vector2fc): number;
    static distanceSquared(paramarg0: Vector2fc, paramarg1: Vector2fc): number;
    static div(paramarg0: Vector2fc, paramarg1: number): Vector2f;
    static div(paramarg0: Vector2fc, paramarg1: Vector2fc): Vector2f;
    static divAssign(paramarg0: Vector2f, paramarg1: number): void;
    static divAssign(paramarg0: Vector2f, paramarg1: Vector2fc): void;
    static dot(paramarg0: Vector2fc, paramarg1: Vector2fc): number;
    static getVector2f(paramarg0: ByteBuffer): Vector2f;
    static getVector2f(paramarg0: ByteBuffer, paramarg1: number): Vector2f;
    static getVector2f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector2f): Vector2f;
    static getVector2f(paramarg0: ByteBuffer, paramarg1: Vector2f): Vector2f;
    static getVector2f(paramarg0: FloatBuffer): Vector2f;
    static getVector2f(paramarg0: FloatBuffer, paramarg1: number): Vector2f;
    static getVector2f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Vector2f): Vector2f;
    static getVector2f(paramarg0: FloatBuffer, paramarg1: Vector2f): Vector2f;
    static minus(paramarg0: Vector2fc, paramarg1: Vector2fc): Vector2f;
    static minusAssign(paramarg0: Vector2f, paramarg1: Vector2fc): void;
    static plus(paramarg0: Vector2fc, paramarg1: Vector2fc): Vector2f;
    static plusAssign(paramarg0: Vector2f, paramarg1: Vector2fc): void;
    static putVector2f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector2f): ByteBuffer;
    static putVector2f(paramarg0: ByteBuffer, paramarg1: Vector2f): ByteBuffer;
    static putVector2f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Vector2f): FloatBuffer;
    static putVector2f(paramarg0: FloatBuffer, paramarg1: Vector2f): FloatBuffer;
    static times(paramarg0: Vector2fc, paramarg1: number): Vector2f;
    static times(paramarg0: Vector2fc, paramarg1: Matrix2fc): Vector2f;
    static times(paramarg0: Vector2fc, paramarg1: Vector2fc): Vector2f;
    static timesAssign(paramarg0: Vector2f, paramarg1: number): void;
    static timesAssign(paramarg0: Vector2f, paramarg1: Matrix2fc): void;
    static timesAssign(paramarg0: Vector2f, paramarg1: Vector2fc): void;
    static unaryMinus(paramarg0: Vector2fc): Vector2f;
}