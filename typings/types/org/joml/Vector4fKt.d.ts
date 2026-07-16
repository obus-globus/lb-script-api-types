import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Vector4fKt extends Object {
    static angle(self: Vector4fc, v: Vector4fc): number;
    static angleCos(self: Vector4fc, v: Vector4fc): number;
    static component1(self: Vector4fc): number;
    static component2(self: Vector4fc): number;
    static component3(self: Vector4fc): number;
    static component4(self: Vector4fc): number;
    static distance(self: Vector4fc, v: Vector4fc): number;
    static distanceSquared(self: Vector4fc, v: Vector4fc): number;
    static div(self: Vector4fc, s: number): Vector4f;
    static div(self: Vector4fc, v: Vector4fc): Vector4f;
    static divAssign(self: Vector4f, s: number): void;
    static divAssign(self: Vector4f, v: Vector4fc): void;
    static dot(self: Vector4fc, v: Vector4fc): number;
    static getVector4f(self: ByteBuffer): Vector4f;
    static getVector4f(self: ByteBuffer, index: number): Vector4f;
    static getVector4f(self: ByteBuffer, index: number, v: Vector4f): Vector4f;
    static getVector4f(self: ByteBuffer, v: Vector4f): Vector4f;
    static getVector4f(self: FloatBuffer): Vector4f;
    static getVector4f(self: FloatBuffer, index: number): Vector4f;
    static getVector4f(self: FloatBuffer, index: number, v: Vector4f): Vector4f;
    static getVector4f(self: FloatBuffer, v: Vector4f): Vector4f;
    static minus(self: Vector4fc, v: Vector4fc): Vector4f;
    static minusAssign(self: Vector4f, v: Vector4fc): void;
    static plus(self: Vector4fc, v: Vector4fc): Vector4f;
    static plusAssign(self: Vector4f, v: Vector4fc): void;
    static putVector4f(self: ByteBuffer, index: number, v: Vector4f): ByteBuffer;
    static putVector4f(self: ByteBuffer, v: Vector4f): ByteBuffer;
    static putVector4f(self: FloatBuffer, index: number, v: Vector4f): FloatBuffer;
    static putVector4f(self: FloatBuffer, v: Vector4f): FloatBuffer;
    static times(self: Vector4fc, s: number): Vector4f;
    static times(self: Vector4fc, m: Matrix4fc): Vector4f;
    static times(self: Vector4fc, m: Matrix4x3fc): Vector4f;
    static times(self: Vector4fc, v: Vector4fc): Vector4f;
    static timesAssign(self: Vector4f, s: number): void;
    static timesAssign(self: Vector4f, m: Matrix4fc): void;
    static timesAssign(self: Vector4f, m: Matrix4x3fc): void;
    static timesAssign(self: Vector4f, v: Vector4fc): void;
    static unaryMinus(self: Vector4fc): Vector4f;
}