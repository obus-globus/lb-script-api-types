import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2f } from '../../org/joml/Matrix2f.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export class Matrix2fKt extends Object {
    static getMatrix2f(self: ByteBuffer, v: Matrix2f): Matrix2f;
    static getMatrix2f(self: FloatBuffer): Matrix2f;
    static getMatrix2f(self: FloatBuffer, v: Matrix2f): Matrix2f;
    static minus(self: Matrix2fc, m: Matrix2fc): Matrix2f;
    static minusAssign(self: Matrix2f, m: Matrix2fc): void;
    static mulComponentWise(self: Matrix2fc, m: Matrix2fc): Matrix2f;
    static plus(self: Matrix2fc, m: Matrix2fc): Matrix2f;
    static plusAssign(self: Matrix2f, m: Matrix2fc): void;
    static putMatrix2f(self: ByteBuffer, index: number, v: Matrix2f): ByteBuffer;
    static putMatrix2f(self: ByteBuffer, v: Matrix2f): ByteBuffer;
    static putMatrix2f(self: FloatBuffer, index: number, v: Matrix2f): FloatBuffer;
    static putMatrix2f(self: FloatBuffer, v: Matrix2f): FloatBuffer;
    static times(self: Matrix2fc, m: Matrix2fc): Matrix2f;
    static times(self: Matrix2fc, v: Vector2fc): Vector2f;
    static timesAssign(self: Matrix2f, m: Matrix2fc): void;
}