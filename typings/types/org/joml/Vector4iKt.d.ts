import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export class Vector4iKt extends Object {
    static component1(paramarg0: Vector4ic): number;
    static component2(paramarg0: Vector4ic): number;
    static component3(paramarg0: Vector4ic): number;
    static component4(paramarg0: Vector4ic): number;
    static distance(paramarg0: Vector4ic, paramarg1: Vector4ic): number;
    static distanceSquared(paramarg0: Vector4ic, paramarg1: Vector4ic): number;
    static div(paramarg0: Vector4ic, paramarg1: number): Vector4i;
    static div(paramarg0: Vector4ic, paramarg1: Vector4ic): Vector4i;
    static divAssign(paramarg0: Vector4i, paramarg1: number): void;
    static divAssign(paramarg0: Vector4i, paramarg1: Vector4ic): void;
    static dot(paramarg0: Vector4ic, paramarg1: Vector4ic): number;
    static getVector4i(paramarg0: ByteBuffer): Vector4i;
    static getVector4i(paramarg0: ByteBuffer, paramarg1: number): Vector4i;
    static getVector4i(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector4i): Vector4i;
    static getVector4i(paramarg0: ByteBuffer, paramarg1: Vector4i): Vector4i;
    static getVector4i(paramarg0: IntBuffer): Vector4i;
    static getVector4i(paramarg0: IntBuffer, paramarg1: number): Vector4i;
    static getVector4i(paramarg0: IntBuffer, paramarg1: number, paramarg2: Vector4i): Vector4i;
    static getVector4i(paramarg0: IntBuffer, paramarg1: Vector4i): Vector4i;
    static gridDistance(paramarg0: Vector4ic, paramarg1: Vector4ic): number;
    static minus(paramarg0: Vector4ic, paramarg1: Vector4ic): Vector4i;
    static minusAssign(paramarg0: Vector4i, paramarg1: Vector4ic): void;
    static plus(paramarg0: Vector4ic, paramarg1: Vector4ic): Vector4i;
    static plusAssign(paramarg0: Vector4i, paramarg1: Vector4ic): void;
    static putVector4i(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector4i): ByteBuffer;
    static putVector4i(paramarg0: ByteBuffer, paramarg1: Vector4i): ByteBuffer;
    static putVector4i(paramarg0: IntBuffer, paramarg1: number, paramarg2: Vector4i): IntBuffer;
    static putVector4i(paramarg0: IntBuffer, paramarg1: Vector4i): IntBuffer;
    static times(paramarg0: Vector4ic, paramarg1: number): Vector4i;
    static times(paramarg0: Vector4ic, paramarg1: Vector4ic): Vector4i;
    static timesAssign(paramarg0: Vector4i, paramarg1: number): void;
    static timesAssign(paramarg0: Vector4i, paramarg1: Vector4ic): void;
    static unaryMinus(paramarg0: Vector4ic): Vector4i;
}