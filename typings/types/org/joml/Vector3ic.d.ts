import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
export interface Vector3ic extends Object{
    absolute(arg0: Vector3i): Vector3i;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i;
    add(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3ic): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3ic): number;
    div(arg0: number, arg1: Vector3i): Vector3i;
    div(arg0: number, arg1: Vector3i): Vector3i;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: IntBuffer): IntBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: IntBuffer): IntBuffer;
    getToAddress(arg0: number): Vector3ic;
    gridDistance(arg0: number, arg1: number, arg2: number): number;
    gridDistance(arg0: Vector3ic): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    maxComponent(): number;
    min(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i;
    mul(arg0: number, arg1: Vector3i): Vector3i;
    mul(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    negate(arg0: Vector3i): Vector3i;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i;
    sub(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    x(): number;
    y(): number;
    z(): number;
}