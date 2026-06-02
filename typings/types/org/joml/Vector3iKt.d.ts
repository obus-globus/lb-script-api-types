import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
export class Vector3iKt extends Object {
    static component1(paramarg0: Vector3ic): number;
    static component2(paramarg0: Vector3ic): number;
    static component3(paramarg0: Vector3ic): number;
    static distance(paramarg0: Vector3ic, paramarg1: Vector3ic): number;
    static distanceSquared(paramarg0: Vector3ic, paramarg1: Vector3ic): number;
    static div(paramarg0: Vector3ic, paramarg1: number): Vector3i;
    static div(paramarg0: Vector3ic, paramarg1: number): Vector3i;
    static divAssign(paramarg0: Vector3i, paramarg1: number): void;
    static divAssign(paramarg0: Vector3i, paramarg1: number): void;
    static getVector3i(paramarg0: ByteBuffer): Vector3i;
    static getVector3i(paramarg0: ByteBuffer, paramarg1: number): Vector3i;
    static getVector3i(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector3i): Vector3i;
    static getVector3i(paramarg0: ByteBuffer, paramarg1: Vector3i): Vector3i;
    static getVector3i(paramarg0: IntBuffer): Vector3i;
    static getVector3i(paramarg0: IntBuffer, paramarg1: number): Vector3i;
    static getVector3i(paramarg0: IntBuffer, paramarg1: number, paramarg2: Vector3i): Vector3i;
    static getVector3i(paramarg0: IntBuffer, paramarg1: Vector3i): Vector3i;
    static gridDistance(paramarg0: Vector3ic, paramarg1: Vector3ic): number;
    static minus(paramarg0: Vector3ic, paramarg1: Vector3ic): Vector3i;
    static minusAssign(paramarg0: Vector3i, paramarg1: Vector3ic): void;
    static plus(paramarg0: Vector3ic, paramarg1: Vector3ic): Vector3i;
    static plusAssign(paramarg0: Vector3i, paramarg1: Vector3ic): void;
    static putVector3i(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector3i): ByteBuffer;
    static putVector3i(paramarg0: ByteBuffer, paramarg1: Vector3i): ByteBuffer;
    static putVector3i(paramarg0: IntBuffer, paramarg1: number, paramarg2: Vector3i): IntBuffer;
    static putVector3i(paramarg0: IntBuffer, paramarg1: Vector3i): IntBuffer;
    static times(paramarg0: Vector3ic, paramarg1: number): Vector3i;
    static times(paramarg0: Vector3ic, paramarg1: Vector3ic): Vector3i;
    static timesAssign(paramarg0: Vector3i, paramarg1: number): void;
    static timesAssign(paramarg0: Vector3i, paramarg1: Vector3ic): void;
    static unaryMinus(paramarg0: Vector3ic): Vector3i;
}