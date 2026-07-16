import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Vector3fKt extends Object {
    static angle(self: Vector3fc, v: Vector3fc): number;
    static angleCos(self: Vector3fc, v: Vector3fc): number;
    static component1(self: Vector3fc): number;
    static component2(self: Vector3fc): number;
    static component3(self: Vector3fc): number;
    static cross(self: Vector3fc, v: Vector3fc): Vector3f;
    static distance(self: Vector3fc, v: Vector3fc): number;
    static distanceSquared(self: Vector3fc, v: Vector3fc): number;
    static div(self: Vector3fc, s: number): Vector3f;
    static div(self: Vector3fc, v: Vector3fc): Vector3f;
    static divAssign(self: Vector3f, s: number): void;
    static divAssign(self: Vector3f, v: Vector3fc): void;
    static dot(self: Vector3fc, v: Vector3fc): number;
    static getVector3f(self: ByteBuffer): Vector3f;
    static getVector3f(self: ByteBuffer, index: number): Vector3f;
    static getVector3f(self: ByteBuffer, index: number, v: Vector3f): Vector3f;
    static getVector3f(self: ByteBuffer, v: Vector3f): Vector3f;
    static getVector3f(self: FloatBuffer): Vector3f;
    static getVector3f(self: FloatBuffer, index: number): Vector3f;
    static getVector3f(self: FloatBuffer, index: number, v: Vector3f): Vector3f;
    static getVector3f(self: FloatBuffer, v: Vector3f): Vector3f;
    static minus(self: Vector3fc, v: Vector3fc): Vector3f;
    static minusAssign(self: Vector3f, v: Vector3fc): void;
    static plus(self: Vector3fc, v: Vector3fc): Vector3f;
    static plusAssign(self: Vector3f, v: Vector3fc): void;
    static putVector3f(self: ByteBuffer, index: number, v: Vector3f): ByteBuffer;
    static putVector3f(self: ByteBuffer, v: Vector3f): ByteBuffer;
    static putVector3f(self: FloatBuffer, index: number, v: Vector3f): FloatBuffer;
    static putVector3f(self: FloatBuffer, v: Vector3f): FloatBuffer;
    static times(self: Vector3fc, s: number): Vector3f;
    static times(self: Vector3fc, m: Matrix3dc): Vector3f;
    static times(self: Vector3fc, m: Matrix3fc): Vector3f;
    static times(self: Vector3fc, m: Matrix3x2dc): Vector3f;
    static times(self: Vector3fc, m: Matrix3x2fc): Vector3f;
    static times(self: Vector3fc, v: Vector3fc): Vector3f;
    static timesAssign(self: Vector3f, s: number): void;
    static timesAssign(self: Vector3f, m: Matrix3dc): void;
    static timesAssign(self: Vector3f, m: Matrix3fc): void;
    static timesAssign(self: Vector3f, m: Matrix3x2dc): void;
    static timesAssign(self: Vector3f, m: Matrix3x2fc): void;
    static timesAssign(self: Vector3f, v: Vector3fc): void;
    static unaryMinus(self: Vector3fc): Vector3f;
}