import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
export class Vector2iKt extends Object {
    static component1(self: Vector2ic): number;
    static component2(self: Vector2ic): number;
    static distance(self: Vector2ic, v: Vector2ic): number;
    static distanceSquared(self: Vector2ic, v: Vector2ic): number;
    static div(self: Vector2ic, s: number): Vector2i;
    static divAssign(self: Vector2i, s: number): void;
    static getVector2i(self: ByteBuffer): Vector2i;
    static getVector2i(self: ByteBuffer, index: number): Vector2i;
    static getVector2i(self: ByteBuffer, index: number, v: Vector2i): Vector2i;
    static getVector2i(self: ByteBuffer, v: Vector2i): Vector2i;
    static getVector2i(self: IntBuffer): Vector2i;
    static getVector2i(self: IntBuffer, index: number): Vector2i;
    static getVector2i(self: IntBuffer, index: number, v: Vector2i): Vector2i;
    static getVector2i(self: IntBuffer, v: Vector2i): Vector2i;
    static gridDistance(self: Vector2ic, v: Vector2ic): number;
    static minus(self: Vector2ic, v: Vector2ic): Vector2i;
    static minusAssign(self: Vector2i, v: Vector2ic): void;
    static plus(self: Vector2ic, v: Vector2ic): Vector2i;
    static plusAssign(self: Vector2i, v: Vector2ic): void;
    static putVector2i(self: ByteBuffer, index: number, v: Vector2i): ByteBuffer;
    static putVector2i(self: ByteBuffer, v: Vector2i): ByteBuffer;
    static putVector2i(self: IntBuffer, index: number, v: Vector2i): IntBuffer;
    static putVector2i(self: IntBuffer, v: Vector2i): IntBuffer;
    static times(self: Vector2ic, s: number): Vector2i;
    static times(self: Vector2ic, v: Vector2ic): Vector2i;
    static timesAssign(self: Vector2i, s: number): void;
    static timesAssign(self: Vector2i, v: Vector2ic): void;
    static unaryMinus(self: Vector2ic): Vector2i;
}