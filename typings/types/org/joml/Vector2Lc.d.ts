import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector2L } from '../../org/joml/Vector2L.d.ts'
export interface Vector2Lc extends Object{
    absolute(arg0: Vector2L): Vector2L;
    add(arg0: number, arg1: number, arg2: Vector2L): Vector2L;
    add(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2Lc): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2Lc): number;
    div(arg0: number, arg1: Vector2L): Vector2L;
    div(arg0: number, arg1: Vector2L): Vector2L;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: LongBuffer): LongBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: LongBuffer): LongBuffer;
    getToAddress(arg0: number): Vector2Lc;
    gridDistance(arg0: number, arg1: number): number;
    gridDistance(arg0: Vector2Lc): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    maxComponent(): number;
    min(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: Vector2L): Vector2L;
    mul(arg0: number, arg1: Vector2L): Vector2L;
    mul(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    negate(arg0: Vector2L): Vector2L;
    sub(arg0: number, arg1: number, arg2: Vector2L): Vector2L;
    sub(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    x(): number;
    y(): number;
}