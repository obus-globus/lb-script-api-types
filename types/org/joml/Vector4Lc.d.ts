import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector4L } from '../../org/joml/Vector4L.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export interface Vector4Lc extends Object{
    absolute(arg0: Vector4L): Vector4L;
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4L): Vector4L;
    add(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    add(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distance(arg0: Vector4Lc): number;
    distance(arg0: Vector4ic): number;
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distanceSquared(arg0: Vector4Lc): number;
    distanceSquared(arg0: Vector4ic): number;
    div(arg0: number, arg1: Vector4L): Vector4L;
    div(arg0: number, arg1: Vector4L): Vector4L;
    div(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    div(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    dot(arg0: Vector4Lc): number;
    dot(arg0: Vector4ic): number;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: LongBuffer): LongBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: LongBuffer): LongBuffer;
    getToAddress(arg0: number): Vector4Lc;
    gridDistance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    gridDistance(arg0: Vector4Lc): number;
    gridDistance(arg0: Vector4ic): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    maxComponent(): number;
    min(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    minComponent(): number;
    mul(arg0: number, arg1: Vector4L): Vector4L;
    mul(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    mul(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    negate(arg0: Vector4L): Vector4L;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4L): Vector4L;
    sub(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    sub(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    w(): number;
    x(): number;
    y(): number;
    z(): number;
}