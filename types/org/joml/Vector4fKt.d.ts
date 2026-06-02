import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Vector4fKt extends Object {
    static angle(paramarg0: Vector4fc, paramarg1: Vector4fc): number;
    static angleCos(paramarg0: Vector4fc, paramarg1: Vector4fc): number;
    static component1(paramarg0: Vector4fc): number;
    static component2(paramarg0: Vector4fc): number;
    static component3(paramarg0: Vector4fc): number;
    static component4(paramarg0: Vector4fc): number;
    static distance(paramarg0: Vector4fc, paramarg1: Vector4fc): number;
    static distanceSquared(paramarg0: Vector4fc, paramarg1: Vector4fc): number;
    static div(paramarg0: Vector4fc, paramarg1: number): Vector4f;
    static div(paramarg0: Vector4fc, paramarg1: Vector4fc): Vector4f;
    static divAssign(paramarg0: Vector4f, paramarg1: number): void;
    static divAssign(paramarg0: Vector4f, paramarg1: Vector4fc): void;
    static dot(paramarg0: Vector4fc, paramarg1: Vector4fc): number;
    static getVector4f(paramarg0: ByteBuffer): Vector4f;
    static getVector4f(paramarg0: ByteBuffer, paramarg1: number): Vector4f;
    static getVector4f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector4f): Vector4f;
    static getVector4f(paramarg0: ByteBuffer, paramarg1: Vector4f): Vector4f;
    static getVector4f(paramarg0: FloatBuffer): Vector4f;
    static getVector4f(paramarg0: FloatBuffer, paramarg1: number): Vector4f;
    static getVector4f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Vector4f): Vector4f;
    static getVector4f(paramarg0: FloatBuffer, paramarg1: Vector4f): Vector4f;
    static minus(paramarg0: Vector4fc, paramarg1: Vector4fc): Vector4f;
    static minusAssign(paramarg0: Vector4f, paramarg1: Vector4fc): void;
    static plus(paramarg0: Vector4fc, paramarg1: Vector4fc): Vector4f;
    static plusAssign(paramarg0: Vector4f, paramarg1: Vector4fc): void;
    static putVector4f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector4f): ByteBuffer;
    static putVector4f(paramarg0: ByteBuffer, paramarg1: Vector4f): ByteBuffer;
    static putVector4f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Vector4f): FloatBuffer;
    static putVector4f(paramarg0: FloatBuffer, paramarg1: Vector4f): FloatBuffer;
    static times(paramarg0: Vector4fc, paramarg1: number): Vector4f;
    static times(paramarg0: Vector4fc, paramarg1: Matrix4fc): Vector4f;
    static times(paramarg0: Vector4fc, paramarg1: Matrix4x3fc): Vector4f;
    static times(paramarg0: Vector4fc, paramarg1: Vector4fc): Vector4f;
    static timesAssign(paramarg0: Vector4f, paramarg1: number): void;
    static timesAssign(paramarg0: Vector4f, paramarg1: Matrix4fc): void;
    static timesAssign(paramarg0: Vector4f, paramarg1: Matrix4x3fc): void;
    static timesAssign(paramarg0: Vector4f, paramarg1: Vector4fc): void;
    static unaryMinus(paramarg0: Vector4fc): Vector4f;
}