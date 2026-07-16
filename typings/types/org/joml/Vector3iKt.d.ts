import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
export class Vector3iKt extends Object {
    static component1(self: Vector3ic): number;
    static component2(self: Vector3ic): number;
    static component3(self: Vector3ic): number;
    static distance(self: Vector3ic, v: Vector3ic): number;
    static distanceSquared(self: Vector3ic, v: Vector3ic): number;
    static div(self: Vector3ic, s: number): Vector3i;
    static divAssign(self: Vector3i, s: number): void;
    static getVector3i(self: ByteBuffer): Vector3i;
    static getVector3i(self: ByteBuffer, index: number): Vector3i;
    static getVector3i(self: ByteBuffer, index: number, v: Vector3i): Vector3i;
    static getVector3i(self: ByteBuffer, v: Vector3i): Vector3i;
    static getVector3i(self: IntBuffer): Vector3i;
    static getVector3i(self: IntBuffer, index: number): Vector3i;
    static getVector3i(self: IntBuffer, index: number, v: Vector3i): Vector3i;
    static getVector3i(self: IntBuffer, v: Vector3i): Vector3i;
    static gridDistance(self: Vector3ic, v: Vector3ic): number;
    static minus(self: Vector3ic, v: Vector3ic): Vector3i;
    static minusAssign(self: Vector3i, v: Vector3ic): void;
    static plus(self: Vector3ic, v: Vector3ic): Vector3i;
    static plusAssign(self: Vector3i, v: Vector3ic): void;
    static putVector3i(self: ByteBuffer, index: number, v: Vector3i): ByteBuffer;
    static putVector3i(self: ByteBuffer, v: Vector3i): ByteBuffer;
    static putVector3i(self: IntBuffer, index: number, v: Vector3i): IntBuffer;
    static putVector3i(self: IntBuffer, v: Vector3i): IntBuffer;
    static times(self: Vector3ic, s: number): Vector3i;
    static times(self: Vector3ic, v: Vector3ic): Vector3i;
    static timesAssign(self: Vector3i, s: number): void;
    static timesAssign(self: Vector3i, v: Vector3ic): void;
    static unaryMinus(self: Vector3ic): Vector3i;
}