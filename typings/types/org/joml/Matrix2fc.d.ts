import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2f } from '../../org/joml/Matrix2f.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export interface Matrix2fc extends Object{
    add(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    determinant(): number;
    equals(arg0: Matrix2fc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: number): number;
    get(arg0: Matrix2f): Matrix2f;
    get(arg0: Matrix3f): Matrix3f;
    get(arg0: Matrix3x2f): Matrix3x2f;
    getColumn(arg0: number, arg1: Vector2f): Vector2f;
    getRotation(): number;
    getRow(arg0: number, arg1: Vector2f): Vector2f;
    getScale(arg0: Vector2f): Vector2f;
    getToAddress(arg0: number): Matrix2fc;
    getTransposed(arg0: ByteBuffer): ByteBuffer;
    getTransposed(arg0: FloatBuffer): FloatBuffer;
    getTransposed(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposed(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getTransposedToAddress(arg0: number): Matrix2fc;
    invert(arg0: Matrix2f): Matrix2f;
    isFinite(): boolean;
    lerp(arg0: Matrix2fc, arg1: number, arg2: Matrix2f): Matrix2f;
    m00(): number;
    m01(): number;
    m10(): number;
    m11(): number;
    mul(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    mulComponentWise(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    mulLocal(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    normal(arg0: Matrix2f): Matrix2f;
    normalizedPositiveX(arg0: Vector2f): Vector2f;
    normalizedPositiveY(arg0: Vector2f): Vector2f;
    positiveX(arg0: Vector2f): Vector2f;
    positiveY(arg0: Vector2f): Vector2f;
    rotate(arg0: number, arg1: Matrix2f): Matrix2f;
    rotateLocal(arg0: number, arg1: Matrix2f): Matrix2f;
    scale(arg0: number, arg1: number, arg2: Matrix2f): Matrix2f;
    scale(arg0: number, arg1: Matrix2f): Matrix2f;
    scale(arg0: Vector2fc, arg1: Matrix2f): Matrix2f;
    scaleLocal(arg0: number, arg1: number, arg2: Matrix2f): Matrix2f;
    sub(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    transform(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    transform(arg0: Vector2f): Vector2f;
    transform(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    transformTranspose(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    transformTranspose(arg0: Vector2f): Vector2f;
    transformTranspose(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    transpose(arg0: Matrix2f): Matrix2f;
}