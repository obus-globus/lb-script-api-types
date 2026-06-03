import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
export interface Vector2fc extends Object{
    absolute(arg0: Vector2f): Vector2f;
    add(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    add(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    angle(arg0: Vector2fc): number;
    ceil(arg0: Vector2f): Vector2f;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2fc): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2fc): number;
    div(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    div(arg0: number, arg1: Vector2f): Vector2f;
    div(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    dot(arg0: Vector2fc): number;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    equals(arg0: Vector2fc, arg1: number): boolean;
    floor(arg0: Vector2f): Vector2f;
    fma(arg0: number, arg1: Vector2fc, arg2: Vector2f): Vector2f;
    fma(arg0: Vector2fc, arg1: Vector2fc, arg2: Vector2f): Vector2f;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector2i): Vector2i;
    get(arg0: Vector2d): Vector2d;
    get(arg0: Vector2f): Vector2f;
    getToAddress(arg0: number): Vector2fc;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector2fc, arg1: number, arg2: Vector2f): Vector2f;
    max(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    maxComponent(): number;
    min(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    mul(arg0: number, arg1: Vector2f): Vector2f;
    mul(arg0: Matrix2dc, arg1: Vector2f): Vector2f;
    mul(arg0: Matrix2fc, arg1: Vector2f): Vector2f;
    mul(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    mulDirection(arg0: Matrix3x2fc, arg1: Vector2f): Vector2f;
    mulPosition(arg0: Matrix3x2fc, arg1: Vector2f): Vector2f;
    mulTranspose(arg0: Matrix2fc, arg1: Vector2f): Vector2f;
    negate(arg0: Vector2f): Vector2f;
    normalize(arg0: number, arg1: Vector2f): Vector2f;
    normalize(arg0: Vector2f): Vector2f;
    round(arg0: Vector2f): Vector2f;
    sub(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    sub(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    x(): number;
    y(): number;
}