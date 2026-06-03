import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
export interface Vector2dc extends Object{
    absolute(arg0: Vector2d): Vector2d;
    add(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    add(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    add(arg0: Vector2fc, arg1: Vector2d): Vector2d;
    angle(arg0: Vector2dc): number;
    ceil(arg0: Vector2d): Vector2d;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2dc): number;
    distance(arg0: Vector2fc): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2dc): number;
    distanceSquared(arg0: Vector2fc): number;
    div(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    div(arg0: number, arg1: Vector2d): Vector2d;
    div(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    div(arg0: Vector2fc, arg1: Vector2d): Vector2d;
    dot(arg0: Vector2dc): number;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    equals(arg0: Vector2dc, arg1: number): boolean;
    floor(arg0: Vector2d): Vector2d;
    fma(arg0: number, arg1: Vector2dc, arg2: Vector2d): Vector2d;
    fma(arg0: Vector2dc, arg1: Vector2dc, arg2: Vector2d): Vector2d;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: Vector2i): Vector2i;
    get(arg0: Vector2d): Vector2d;
    get(arg0: Vector2f): Vector2f;
    getToAddress(arg0: number): Vector2dc;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector2dc, arg1: number, arg2: Vector2d): Vector2d;
    max(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    maxComponent(): number;
    min(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    mul(arg0: number, arg1: Vector2d): Vector2d;
    mul(arg0: Matrix2dc, arg1: Vector2d): Vector2d;
    mul(arg0: Matrix2fc, arg1: Vector2d): Vector2d;
    mul(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    mulDirection(arg0: Matrix3x2dc, arg1: Vector2d): Vector2d;
    mulPosition(arg0: Matrix3x2dc, arg1: Vector2d): Vector2d;
    mulTranspose(arg0: Matrix2dc, arg1: Vector2d): Vector2d;
    mulTranspose(arg0: Matrix2fc, arg1: Vector2d): Vector2d;
    negate(arg0: Vector2d): Vector2d;
    normalize(arg0: number, arg1: Vector2d): Vector2d;
    normalize(arg0: Vector2d): Vector2d;
    round(arg0: Vector2d): Vector2d;
    sub(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    sub(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    sub(arg0: Vector2fc, arg1: Vector2d): Vector2d;
    x(): number;
    y(): number;
}