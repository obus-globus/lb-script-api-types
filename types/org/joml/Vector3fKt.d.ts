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
    static angle(paramarg0: Vector3fc, paramarg1: Vector3fc): number;
    static angleCos(paramarg0: Vector3fc, paramarg1: Vector3fc): number;
    static component1(paramarg0: Vector3fc): number;
    static component2(paramarg0: Vector3fc): number;
    static component3(paramarg0: Vector3fc): number;
    static cross(paramarg0: Vector3fc, paramarg1: Vector3fc): Vector3f;
    static distance(paramarg0: Vector3fc, paramarg1: Vector3fc): number;
    static distanceSquared(paramarg0: Vector3fc, paramarg1: Vector3fc): number;
    static div(paramarg0: Vector3fc, paramarg1: number): Vector3f;
    static div(paramarg0: Vector3fc, paramarg1: Vector3fc): Vector3f;
    static divAssign(paramarg0: Vector3f, paramarg1: number): void;
    static divAssign(paramarg0: Vector3f, paramarg1: Vector3fc): void;
    static dot(paramarg0: Vector3fc, paramarg1: Vector3fc): number;
    static getVector3f(paramarg0: ByteBuffer): Vector3f;
    static getVector3f(paramarg0: ByteBuffer, paramarg1: number): Vector3f;
    static getVector3f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector3f): Vector3f;
    static getVector3f(paramarg0: ByteBuffer, paramarg1: Vector3f): Vector3f;
    static getVector3f(paramarg0: FloatBuffer): Vector3f;
    static getVector3f(paramarg0: FloatBuffer, paramarg1: number): Vector3f;
    static getVector3f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Vector3f): Vector3f;
    static getVector3f(paramarg0: FloatBuffer, paramarg1: Vector3f): Vector3f;
    static minus(paramarg0: Vector3fc, paramarg1: Vector3fc): Vector3f;
    static minusAssign(paramarg0: Vector3f, paramarg1: Vector3fc): void;
    static plus(paramarg0: Vector3fc, paramarg1: Vector3fc): Vector3f;
    static plusAssign(paramarg0: Vector3f, paramarg1: Vector3fc): void;
    static putVector3f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector3f): ByteBuffer;
    static putVector3f(paramarg0: ByteBuffer, paramarg1: Vector3f): ByteBuffer;
    static putVector3f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Vector3f): FloatBuffer;
    static putVector3f(paramarg0: FloatBuffer, paramarg1: Vector3f): FloatBuffer;
    static times(paramarg0: Vector3fc, paramarg1: number): Vector3f;
    static times(paramarg0: Vector3fc, paramarg1: Matrix3dc): Vector3f;
    static times(paramarg0: Vector3fc, paramarg1: Matrix3fc): Vector3f;
    static times(paramarg0: Vector3fc, paramarg1: Matrix3x2dc): Vector3f;
    static times(paramarg0: Vector3fc, paramarg1: Matrix3x2fc): Vector3f;
    static times(paramarg0: Vector3fc, paramarg1: Vector3fc): Vector3f;
    static timesAssign(paramarg0: Vector3f, paramarg1: number): void;
    static timesAssign(paramarg0: Vector3f, paramarg1: Matrix3dc): void;
    static timesAssign(paramarg0: Vector3f, paramarg1: Matrix3fc): void;
    static timesAssign(paramarg0: Vector3f, paramarg1: Matrix3x2dc): void;
    static timesAssign(paramarg0: Vector3f, paramarg1: Matrix3x2fc): void;
    static timesAssign(paramarg0: Vector3f, paramarg1: Vector3fc): void;
    static unaryMinus(paramarg0: Vector3fc): Vector3f;
}