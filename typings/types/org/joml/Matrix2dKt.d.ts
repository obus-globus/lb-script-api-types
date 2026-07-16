import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2d } from '../../org/joml/Matrix2d.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
export class Matrix2dKt extends Object {
    static getMatrix2d(self: ByteBuffer, v: Matrix2d): Matrix2d;
    static getMatrix2d(self: DoubleBuffer): Matrix2d;
    static getMatrix2d(self: DoubleBuffer, v: Matrix2d): Matrix2d;
    static minus(self: Matrix2dc, m: Matrix2dc): Matrix2d;
    static minusAssign(self: Matrix2d, m: Matrix2dc): void;
    static mulComponentWise(self: Matrix2dc, m: Matrix2dc): Matrix2d;
    static plus(self: Matrix2dc, m: Matrix2dc): Matrix2d;
    static plusAssign(self: Matrix2d, m: Matrix2dc): void;
    static putMatrix2d(self: ByteBuffer, index: number, v: Matrix2d): ByteBuffer;
    static putMatrix2d(self: ByteBuffer, v: Matrix2d): ByteBuffer;
    static putMatrix2d(self: DoubleBuffer, index: number, v: Matrix2d): DoubleBuffer;
    static putMatrix2d(self: DoubleBuffer, v: Matrix2d): DoubleBuffer;
    static times(self: Matrix2dc, m: Matrix2dc): Matrix2d;
    static times(self: Matrix2dc, m: Matrix2fc): Matrix2d;
    static times(self: Matrix2dc, v: Vector2dc): Vector2d;
    static timesAssign(self: Matrix2d, m: Matrix2dc): void;
    static timesAssign(self: Matrix2d, m: Matrix2fc): void;
}