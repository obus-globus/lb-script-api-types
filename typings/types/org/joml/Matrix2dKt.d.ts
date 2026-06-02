import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2d } from '../../org/joml/Matrix2d.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
export class Matrix2dKt extends Object {
    static getMatrix2d(paramarg0: ByteBuffer, paramarg1: Matrix2d): Matrix2d;
    static getMatrix2d(paramarg0: DoubleBuffer): Matrix2d;
    static getMatrix2d(paramarg0: DoubleBuffer, paramarg1: Matrix2d): Matrix2d;
    static minus(paramarg0: Matrix2dc, paramarg1: Matrix2dc): Matrix2d;
    static minusAssign(paramarg0: Matrix2d, paramarg1: Matrix2dc): void;
    static mulComponentWise(paramarg0: Matrix2dc, paramarg1: Matrix2dc): Matrix2d;
    static plus(paramarg0: Matrix2dc, paramarg1: Matrix2dc): Matrix2d;
    static plusAssign(paramarg0: Matrix2d, paramarg1: Matrix2dc): void;
    static putMatrix2d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix2d): ByteBuffer;
    static putMatrix2d(paramarg0: ByteBuffer, paramarg1: Matrix2d): ByteBuffer;
    static putMatrix2d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Matrix2d): DoubleBuffer;
    static putMatrix2d(paramarg0: DoubleBuffer, paramarg1: Matrix2d): DoubleBuffer;
    static times(paramarg0: Matrix2dc, paramarg1: Matrix2dc): Matrix2d;
    static times(paramarg0: Matrix2dc, paramarg1: Matrix2fc): Matrix2d;
    static times(paramarg0: Matrix2dc, paramarg1: Vector2dc): Vector2d;
    static timesAssign(paramarg0: Matrix2d, paramarg1: Matrix2dc): void;
    static timesAssign(paramarg0: Matrix2d, paramarg1: Matrix2fc): void;
}