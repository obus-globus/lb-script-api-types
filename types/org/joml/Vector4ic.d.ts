import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
export interface Vector4ic extends Object{
    absolute(arg0: Vector4i): Vector4i;
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4i): Vector4i;
    add(arg0: Vector4ic, arg1: Vector4i): Vector4i;
    distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distance(arg0: Vector4ic): number;
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distanceSquared(arg0: Vector4ic): number;
    div(arg0: number, arg1: Vector4i): Vector4i;
    div(arg0: number, arg1: Vector4i): Vector4i;
    div(arg0: Vector4ic, arg1: Vector4i): Vector4i;
    dot(arg0: Vector4ic): number;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: IntBuffer): IntBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: IntBuffer): IntBuffer;
    getToAddress(arg0: number): Vector4ic;
    gridDistance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    gridDistance(arg0: Vector4ic): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector4ic, arg1: Vector4i): Vector4i;
    maxComponent(): number;
    min(arg0: Vector4ic, arg1: Vector4i): Vector4i;
    minComponent(): number;
    mul(arg0: number, arg1: Vector4i): Vector4i;
    mul(arg0: Vector4ic, arg1: Vector4i): Vector4i;
    negate(arg0: Vector4i): Vector4i;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4i): Vector4i;
    sub(arg0: Vector4ic, arg1: Vector4i): Vector4i;
    w(): number;
    x(): number;
    y(): number;
    z(): number;
}