import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
export class Vector2iKt extends Object {
    static component1(paramarg0: Vector2ic): number;
    static component2(paramarg0: Vector2ic): number;
    static distance(paramarg0: Vector2ic, paramarg1: Vector2ic): number;
    static distanceSquared(paramarg0: Vector2ic, paramarg1: Vector2ic): number;
    static div(paramarg0: Vector2ic, paramarg1: number): Vector2i;
    static divAssign(paramarg0: Vector2i, paramarg1: number): void;
    static getVector2i(paramarg0: ByteBuffer): Vector2i;
    static getVector2i(paramarg0: ByteBuffer, paramarg1: number): Vector2i;
    static getVector2i(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector2i): Vector2i;
    static getVector2i(paramarg0: ByteBuffer, paramarg1: Vector2i): Vector2i;
    static getVector2i(paramarg0: IntBuffer): Vector2i;
    static getVector2i(paramarg0: IntBuffer, paramarg1: number): Vector2i;
    static getVector2i(paramarg0: IntBuffer, paramarg1: number, paramarg2: Vector2i): Vector2i;
    static getVector2i(paramarg0: IntBuffer, paramarg1: Vector2i): Vector2i;
    static gridDistance(paramarg0: Vector2ic, paramarg1: Vector2ic): number;
    static minus(paramarg0: Vector2ic, paramarg1: Vector2ic): Vector2i;
    static minusAssign(paramarg0: Vector2i, paramarg1: Vector2ic): void;
    static plus(paramarg0: Vector2ic, paramarg1: Vector2ic): Vector2i;
    static plusAssign(paramarg0: Vector2i, paramarg1: Vector2ic): void;
    static putVector2i(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector2i): ByteBuffer;
    static putVector2i(paramarg0: ByteBuffer, paramarg1: Vector2i): ByteBuffer;
    static putVector2i(paramarg0: IntBuffer, paramarg1: number, paramarg2: Vector2i): IntBuffer;
    static putVector2i(paramarg0: IntBuffer, paramarg1: Vector2i): IntBuffer;
    static times(paramarg0: Vector2ic, paramarg1: number): Vector2i;
    static times(paramarg0: Vector2ic, paramarg1: Vector2ic): Vector2i;
    static timesAssign(paramarg0: Vector2i, paramarg1: number): void;
    static timesAssign(paramarg0: Vector2i, paramarg1: Vector2ic): void;
    static unaryMinus(paramarg0: Vector2ic): Vector2i;
}