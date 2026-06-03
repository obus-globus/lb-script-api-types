import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2d } from '../../org/joml/Matrix2d.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3x2d } from '../../org/joml/Matrix3x2d.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
export interface Matrix2dc extends Object{
    add(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    determinant(): number;
    equals(other: Object | null): boolean;
    equals(arg0: Matrix2dc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: number): number;
    get(arg0: Matrix2d): Matrix2d;
    get(arg0: Matrix3d): Matrix3d;
    get(arg0: Matrix3x2d): Matrix3x2d;
    getColumn(arg0: number, arg1: Vector2d): Vector2d;
    getFloats(arg0: ByteBuffer): ByteBuffer;
    getFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getRotation(): number;
    getRow(arg0: number, arg1: Vector2d): Vector2d;
    getScale(arg0: Vector2d): Vector2d;
    getToAddress(arg0: number): Matrix2dc;
    getTransposed(arg0: ByteBuffer): ByteBuffer;
    getTransposed(arg0: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: FloatBuffer): FloatBuffer;
    getTransposed(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposed(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getTransposedFloats(arg0: ByteBuffer): ByteBuffer;
    getTransposedFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposedToAddress(arg0: number): Matrix2dc;
    invert(arg0: Matrix2d): Matrix2d;
    isFinite(): boolean;
    lerp(arg0: Matrix2dc, arg1: number, arg2: Matrix2d): Matrix2d;
    m00(): number;
    m01(): number;
    m10(): number;
    m11(): number;
    mul(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    mul(arg0: Matrix2fc, arg1: Matrix2d): Matrix2d;
    mulComponentWise(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    mulLocal(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    normal(arg0: Matrix2d): Matrix2d;
    normalizedPositiveX(arg0: Vector2d): Vector2d;
    normalizedPositiveY(arg0: Vector2d): Vector2d;
    positiveX(arg0: Vector2d): Vector2d;
    positiveY(arg0: Vector2d): Vector2d;
    rotate(arg0: number, arg1: Matrix2d): Matrix2d;
    rotateLocal(arg0: number, arg1: Matrix2d): Matrix2d;
    scale(arg0: number, arg1: number, arg2: Matrix2d): Matrix2d;
    scale(arg0: number, arg1: Matrix2d): Matrix2d;
    scale(arg0: Vector2dc, arg1: Matrix2d): Matrix2d;
    scaleLocal(arg0: number, arg1: number, arg2: Matrix2d): Matrix2d;
    sub(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    transform(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transform(arg0: Vector2d): Vector2d;
    transform(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    transformTranspose(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transformTranspose(arg0: Vector2d): Vector2d;
    transformTranspose(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    transpose(arg0: Matrix2d): Matrix2d;
}