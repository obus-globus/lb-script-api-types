import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3x2d } from '../../org/joml/Matrix3x2d.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
export interface Matrix3x2dc extends Object{
    determinant(): number;
    equals(other: Object | null): boolean;
    equals(arg0: Matrix3x2dc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: Matrix3x2d): Matrix3x2d;
    get3x3(arg0: ByteBuffer): ByteBuffer;
    get3x3(arg0: DoubleBuffer): DoubleBuffer;
    get3x3(arg0: number[]): number[];
    get3x3(arg0: number[], arg1: number): number[];
    get3x3(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get3x3(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get4x4(arg0: ByteBuffer): ByteBuffer;
    get4x4(arg0: DoubleBuffer): DoubleBuffer;
    get4x4(arg0: number[]): number[];
    get4x4(arg0: number[], arg1: number): number[];
    get4x4(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get4x4(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    getToAddress(arg0: number): Matrix3x2dc;
    getTransposed(arg0: ByteBuffer): ByteBuffer;
    getTransposed(arg0: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: FloatBuffer): FloatBuffer;
    getTransposed(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposed(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getTransposedFloats(arg0: ByteBuffer): ByteBuffer;
    getTransposedFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposedToAddress(arg0: number): Matrix3x2dc;
    invert(arg0: Matrix3x2d): Matrix3x2d;
    isFinite(): boolean;
    m00(): number;
    m01(): number;
    m10(): number;
    m11(): number;
    m20(): number;
    m21(): number;
    mul(arg0: Matrix3x2dc, arg1: Matrix3x2d): Matrix3x2d;
    mulLocal(arg0: Matrix3x2dc, arg1: Matrix3x2d): Matrix3x2d;
    normalizedPositiveX(arg0: Vector2d): Vector2d;
    normalizedPositiveY(arg0: Vector2d): Vector2d;
    origin(arg0: Vector2d): Vector2d;
    positiveX(arg0: Vector2d): Vector2d;
    positiveY(arg0: Vector2d): Vector2d;
    rotate(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    rotateAbout(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2d): Matrix3x2d;
    rotateLocal(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    rotateTo(arg0: Vector2dc, arg1: Vector2dc, arg2: Matrix3x2d): Matrix3x2d;
    scale(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    scale(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    scale(arg0: Vector2dc, arg1: Matrix3x2d): Matrix3x2d;
    scale(arg0: Vector2fc, arg1: Matrix3x2d): Matrix3x2d;
    scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2d): Matrix3x2d;
    scaleAround(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2d): Matrix3x2d;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2d): Matrix3x2d;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2d): Matrix3x2d;
    scaleLocal(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    scaleLocal(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    testAar(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    testCircle(arg0: number, arg1: number, arg2: number): boolean;
    testPoint(arg0: number, arg1: number): boolean;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transform(arg0: Vector3d): Vector3d;
    transform(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transformDirection(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transformDirection(arg0: Vector2d): Vector2d;
    transformDirection(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    transformPosition(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transformPosition(arg0: Vector2d): Vector2d;
    transformPosition(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    translate(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    translate(arg0: Vector2dc, arg1: Matrix3x2d): Matrix3x2d;
    translateLocal(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    translateLocal(arg0: Vector2dc, arg1: Matrix3x2d): Matrix3x2d;
    unproject(arg0: number, arg1: number, arg2: number[], arg3: Vector2d): Vector2d;
    unprojectInv(arg0: number, arg1: number, arg2: number[], arg3: Vector2d): Vector2d;
    view(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2d): Matrix3x2d;
    viewArea(arg0: number[]): number[];
}