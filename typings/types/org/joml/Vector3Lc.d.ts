import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector3L } from '../../org/joml/Vector3L.d.ts'
export interface Vector3Lc extends Object{
    absolute(arg0: Vector3L): Vector3L;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3L): Vector3L;
    add(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3Lc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3Lc): number;
    div(arg0: number, arg1: Vector3L): Vector3L;
    div(arg0: number, arg1: Vector3L): Vector3L;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: LongBuffer): LongBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: LongBuffer): LongBuffer;
    getToAddress(arg0: number): Vector3Lc;
    gridDistance(arg0: number, arg1: number, arg2: number): number;
    gridDistance(arg0: Vector3Lc): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    maxComponent(): number;
    min(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3L): Vector3L;
    mul(arg0: number, arg1: Vector3L): Vector3L;
    mul(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    negate(arg0: Vector3L): Vector3L;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3L): Vector3L;
    sub(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    x(): number;
    y(): number;
    z(): number;
}