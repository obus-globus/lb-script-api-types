import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export class Vector2dKt extends Object {
    static angle(paramarg0: Vector2dc, paramarg1: Vector2dc): number;
    static component1(paramarg0: Vector2dc): number;
    static component2(paramarg0: Vector2dc): number;
    static distance(paramarg0: Vector2dc, paramarg1: Vector2dc): number;
    static distance(paramarg0: Vector2dc, paramarg1: Vector2fc): number;
    static distanceSquared(paramarg0: Vector2dc, paramarg1: Vector2dc): number;
    static distanceSquared(paramarg0: Vector2dc, paramarg1: Vector2fc): number;
    static div(paramarg0: Vector2dc, paramarg1: Vector2dc): Vector2d;
    static div(paramarg0: Vector2dc, paramarg1: Vector2fc): Vector2d;
    static divAssign(paramarg0: Vector2d, paramarg1: Vector2dc): void;
    static divAssign(paramarg0: Vector2d, paramarg1: Vector2fc): void;
    static dot(paramarg0: Vector2dc, paramarg1: Vector2dc): number;
    static getVector2d(paramarg0: ByteBuffer): Vector2d;
    static getVector2d(paramarg0: ByteBuffer, paramarg1: number): Vector2d;
    static getVector2d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector2d): Vector2d;
    static getVector2d(paramarg0: ByteBuffer, paramarg1: Vector2d): Vector2d;
    static getVector2d(paramarg0: DoubleBuffer): Vector2d;
    static getVector2d(paramarg0: DoubleBuffer, paramarg1: number): Vector2d;
    static getVector2d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Vector2d): Vector2d;
    static getVector2d(paramarg0: DoubleBuffer, paramarg1: Vector2d): Vector2d;
    static minus(paramarg0: Vector2dc, paramarg1: Vector2dc): Vector2d;
    static minus(paramarg0: Vector2dc, paramarg1: Vector2fc): Vector2d;
    static minusAssign(paramarg0: Vector2d, paramarg1: Vector2dc): void;
    static minusAssign(paramarg0: Vector2d, paramarg1: Vector2fc): void;
    static plus(paramarg0: Vector2dc, paramarg1: Vector2dc): Vector2d;
    static plus(paramarg0: Vector2dc, paramarg1: Vector2fc): Vector2d;
    static plusAssign(paramarg0: Vector2d, paramarg1: Vector2dc): void;
    static plusAssign(paramarg0: Vector2d, paramarg1: Vector2fc): void;
    static putVector2d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector2d): ByteBuffer;
    static putVector2d(paramarg0: ByteBuffer, paramarg1: Vector2d): ByteBuffer;
    static putVector2d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Vector2d): DoubleBuffer;
    static putVector2d(paramarg0: DoubleBuffer, paramarg1: Vector2d): DoubleBuffer;
    static times(paramarg0: Vector2dc, paramarg1: number): Vector2d;
    static times(paramarg0: Vector2dc, paramarg1: Matrix2dc): Vector2d;
    static times(paramarg0: Vector2dc, paramarg1: Matrix2fc): Vector2d;
    static times(paramarg0: Vector2dc, paramarg1: Vector2dc): Vector2d;
    static timesAssign(paramarg0: Vector2d, paramarg1: number): void;
    static timesAssign(paramarg0: Vector2d, paramarg1: Matrix2dc): void;
    static timesAssign(paramarg0: Vector2d, paramarg1: Matrix2fc): void;
    static timesAssign(paramarg0: Vector2d, paramarg1: Vector2dc): void;
    static unaryMinus(paramarg0: Vector2dc): Vector2d;
}