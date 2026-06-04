import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
export interface Vector2ic extends Object{
    absolute(arg0: Vector2i): Vector2i;
    add(arg0: number, arg1: number, arg2: Vector2i): Vector2i;
    add(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2ic): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2ic): number;
    div(arg0: number, arg1: Vector2i): Vector2i;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: IntBuffer): IntBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: IntBuffer): IntBuffer;
    getToAddress(arg0: number): Vector2ic;
    gridDistance(arg0: number, arg1: number): number;
    gridDistance(arg0: Vector2ic): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    maxComponent(): number;
    min(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: Vector2i): Vector2i;
    mul(arg0: number, arg1: Vector2i): Vector2i;
    mul(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    negate(arg0: Vector2i): Vector2i;
    sub(arg0: number, arg1: number, arg2: Vector2i): Vector2i;
    sub(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    x(): number;
    y(): number;
}