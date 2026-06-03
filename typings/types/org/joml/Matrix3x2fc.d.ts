import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export interface Matrix3x2fc extends Object{
    determinant(): number;
    equals(other: Object | null): boolean;
    equals(arg0: Matrix3x2fc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: Matrix3x2f): Matrix3x2f;
    get3x3(arg0: ByteBuffer): ByteBuffer;
    get3x3(arg0: FloatBuffer): FloatBuffer;
    get3x3(arg0: number[]): number[];
    get3x3(arg0: number[], arg1: number): number[];
    get3x3(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get3x3(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get4x4(arg0: ByteBuffer): ByteBuffer;
    get4x4(arg0: FloatBuffer): FloatBuffer;
    get4x4(arg0: number[]): number[];
    get4x4(arg0: number[], arg1: number): number[];
    get4x4(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get4x4(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getToAddress(arg0: number): Matrix3x2fc;
    getTransposedToAddress(arg0: number): Matrix3x2fc;
    invert(arg0: Matrix3x2f): Matrix3x2f;
    isFinite(): boolean;
    m00(): number;
    m01(): number;
    m10(): number;
    m11(): number;
    m20(): number;
    m21(): number;
    mul(arg0: Matrix3x2fc, arg1: Matrix3x2f): Matrix3x2f;
    mulLocal(arg0: Matrix3x2fc, arg1: Matrix3x2f): Matrix3x2f;
    normalizedPositiveX(arg0: Vector2f): Vector2f;
    normalizedPositiveY(arg0: Vector2f): Vector2f;
    origin(arg0: Vector2f): Vector2f;
    positiveX(arg0: Vector2f): Vector2f;
    positiveY(arg0: Vector2f): Vector2f;
    rotate(arg0: number, arg1: Matrix3x2f): Matrix3x2f;
    rotateAbout(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2f): Matrix3x2f;
    rotateLocal(arg0: number, arg1: Matrix3x2f): Matrix3x2f;
    rotateTo(arg0: Vector2fc, arg1: Vector2fc, arg2: Matrix3x2f): Matrix3x2f;
    scale(arg0: number, arg1: number, arg2: Matrix3x2f): Matrix3x2f;
    scale(arg0: number, arg1: Matrix3x2f): Matrix3x2f;
    scale(arg0: Vector2fc, arg1: Matrix3x2f): Matrix3x2f;
    scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2f): Matrix3x2f;
    scaleAround(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2f): Matrix3x2f;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2f): Matrix3x2f;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2f): Matrix3x2f;
    scaleLocal(arg0: number, arg1: number, arg2: Matrix3x2f): Matrix3x2f;
    scaleLocal(arg0: number, arg1: Matrix3x2f): Matrix3x2f;
    testAar(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    testCircle(arg0: number, arg1: number, arg2: number): boolean;
    testPoint(arg0: number, arg1: number): boolean;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transform(arg0: Vector3f): Vector3f;
    transform(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transformDirection(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    transformDirection(arg0: Vector2f): Vector2f;
    transformDirection(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    transformPosition(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    transformPosition(arg0: Vector2f): Vector2f;
    transformPosition(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    translate(arg0: number, arg1: number, arg2: Matrix3x2f): Matrix3x2f;
    translate(arg0: Vector2fc, arg1: Matrix3x2f): Matrix3x2f;
    translateLocal(arg0: number, arg1: number, arg2: Matrix3x2f): Matrix3x2f;
    translateLocal(arg0: Vector2fc, arg1: Matrix3x2f): Matrix3x2f;
    unproject(arg0: number, arg1: number, arg2: number[], arg3: Vector2f): Vector2f;
    unprojectInv(arg0: number, arg1: number, arg2: number[], arg3: Vector2f): Vector2f;
    view(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2f): Matrix3x2f;
    viewArea(arg0: number[]): number[];
}