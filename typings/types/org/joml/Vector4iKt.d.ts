import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export class Vector4iKt extends Object {
    static component1(self: Vector4ic): number;
    static component2(self: Vector4ic): number;
    static component3(self: Vector4ic): number;
    static component4(self: Vector4ic): number;
    static distance(self: Vector4ic, v: Vector4ic): number;
    static distanceSquared(self: Vector4ic, v: Vector4ic): number;
    static div(self: Vector4ic, s: number): Vector4i;
    static div(self: Vector4ic, v: Vector4ic): Vector4i;
    static divAssign(self: Vector4i, s: number): void;
    static divAssign(self: Vector4i, v: Vector4ic): void;
    static dot(self: Vector4ic, v: Vector4ic): number;
    static getVector4i(self: ByteBuffer): Vector4i;
    static getVector4i(self: ByteBuffer, index: number): Vector4i;
    static getVector4i(self: ByteBuffer, index: number, v: Vector4i): Vector4i;
    static getVector4i(self: ByteBuffer, v: Vector4i): Vector4i;
    static getVector4i(self: IntBuffer): Vector4i;
    static getVector4i(self: IntBuffer, index: number): Vector4i;
    static getVector4i(self: IntBuffer, index: number, v: Vector4i): Vector4i;
    static getVector4i(self: IntBuffer, v: Vector4i): Vector4i;
    static gridDistance(self: Vector4ic, v: Vector4ic): number;
    static minus(self: Vector4ic, v: Vector4ic): Vector4i;
    static minusAssign(self: Vector4i, v: Vector4ic): void;
    static plus(self: Vector4ic, v: Vector4ic): Vector4i;
    static plusAssign(self: Vector4i, v: Vector4ic): void;
    static putVector4i(self: ByteBuffer, index: number, v: Vector4i): ByteBuffer;
    static putVector4i(self: ByteBuffer, v: Vector4i): ByteBuffer;
    static putVector4i(self: IntBuffer, index: number, v: Vector4i): IntBuffer;
    static putVector4i(self: IntBuffer, v: Vector4i): IntBuffer;
    static times(self: Vector4ic, s: number): Vector4i;
    static times(self: Vector4ic, v: Vector4ic): Vector4i;
    static timesAssign(self: Vector4i, s: number): void;
    static timesAssign(self: Vector4i, v: Vector4ic): void;
    static unaryMinus(self: Vector4ic): Vector4i;
}