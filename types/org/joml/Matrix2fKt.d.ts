import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2f } from '../../org/joml/Matrix2f.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export class Matrix2fKt extends Object {
    static getMatrix2f(paramarg0: ByteBuffer, paramarg1: Matrix2f): Matrix2f;
    static getMatrix2f(paramarg0: FloatBuffer): Matrix2f;
    static getMatrix2f(paramarg0: FloatBuffer, paramarg1: Matrix2f): Matrix2f;
    static minus(paramarg0: Matrix2fc, paramarg1: Matrix2fc): Matrix2f;
    static minusAssign(paramarg0: Matrix2f, paramarg1: Matrix2fc): void;
    static mulComponentWise(paramarg0: Matrix2fc, paramarg1: Matrix2fc): Matrix2f;
    static plus(paramarg0: Matrix2fc, paramarg1: Matrix2fc): Matrix2f;
    static plusAssign(paramarg0: Matrix2f, paramarg1: Matrix2fc): void;
    static putMatrix2f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix2f): ByteBuffer;
    static putMatrix2f(paramarg0: ByteBuffer, paramarg1: Matrix2f): ByteBuffer;
    static putMatrix2f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Matrix2f): FloatBuffer;
    static putMatrix2f(paramarg0: FloatBuffer, paramarg1: Matrix2f): FloatBuffer;
    static times(paramarg0: Matrix2fc, paramarg1: Matrix2fc): Matrix2f;
    static times(paramarg0: Matrix2fc, paramarg1: Vector2fc): Vector2f;
    static timesAssign(paramarg0: Matrix2f, paramarg1: Matrix2fc): void;
}