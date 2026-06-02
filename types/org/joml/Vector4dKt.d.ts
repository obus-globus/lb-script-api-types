import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Vector4dKt extends Object {
    static angle(paramarg0: Vector4dc, paramarg1: Vector4dc): number;
    static angleCos(paramarg0: Vector4dc, paramarg1: Vector4dc): number;
    static component1(paramarg0: Vector4dc): number;
    static component2(paramarg0: Vector4dc): number;
    static component3(paramarg0: Vector4dc): number;
    static component4(paramarg0: Vector4dc): number;
    static distance(paramarg0: Vector4dc, paramarg1: Vector4dc): number;
    static distanceSquared(paramarg0: Vector4dc, paramarg1: Vector4dc): number;
    static div(paramarg0: Vector4dc, paramarg1: number): Vector4d;
    static div(paramarg0: Vector4dc, paramarg1: Vector4dc): Vector4d;
    static divAssign(paramarg0: Vector4d, paramarg1: number): void;
    static divAssign(paramarg0: Vector4d, paramarg1: Vector4dc): void;
    static dot(paramarg0: Vector4dc, paramarg1: Vector4dc): number;
    static getVector4d(paramarg0: ByteBuffer): Vector4d;
    static getVector4d(paramarg0: ByteBuffer, paramarg1: number): Vector4d;
    static getVector4d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector4d): Vector4d;
    static getVector4d(paramarg0: ByteBuffer, paramarg1: Vector4d): Vector4d;
    static getVector4d(paramarg0: DoubleBuffer): Vector4d;
    static getVector4d(paramarg0: DoubleBuffer, paramarg1: number): Vector4d;
    static getVector4d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Vector4d): Vector4d;
    static getVector4d(paramarg0: DoubleBuffer, paramarg1: Vector4d): Vector4d;
    static minus(paramarg0: Vector4dc, paramarg1: Vector4dc): Vector4d;
    static minus(paramarg0: Vector4dc, paramarg1: Vector4fc): Vector4d;
    static minusAssign(paramarg0: Vector4d, paramarg1: Vector4dc): void;
    static minusAssign(paramarg0: Vector4d, paramarg1: Vector4fc): void;
    static plus(paramarg0: Vector4dc, paramarg1: Vector4dc): Vector4d;
    static plus(paramarg0: Vector4dc, paramarg1: Vector4fc): Vector4d;
    static plusAssign(paramarg0: Vector4d, paramarg1: Vector4dc): void;
    static plusAssign(paramarg0: Vector4d, paramarg1: Vector4fc): void;
    static putVector4d(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Vector4d): ByteBuffer;
    static putVector4d(paramarg0: ByteBuffer, paramarg1: Vector4d): ByteBuffer;
    static putVector4d(paramarg0: DoubleBuffer, paramarg1: number, paramarg2: Vector4d): DoubleBuffer;
    static putVector4d(paramarg0: DoubleBuffer, paramarg1: Vector4d): DoubleBuffer;
    static times(paramarg0: Vector4dc, paramarg1: number): Vector4d;
    static times(paramarg0: Vector4dc, paramarg1: Matrix4dc): Vector4d;
    static times(paramarg0: Vector4dc, paramarg1: Matrix4fc): Vector4d;
    static times(paramarg0: Vector4dc, paramarg1: Matrix4x3dc): Vector4d;
    static times(paramarg0: Vector4dc, paramarg1: Matrix4x3fc): Vector4d;
    static times(paramarg0: Vector4dc, paramarg1: Vector4dc): Vector4d;
    static times(paramarg0: Vector4dc, paramarg1: Vector4fc): Vector4d;
    static timesAssign(paramarg0: Vector4d, paramarg1: number): void;
    static timesAssign(paramarg0: Vector4d, paramarg1: Matrix4dc): void;
    static timesAssign(paramarg0: Vector4d, paramarg1: Matrix4fc): void;
    static timesAssign(paramarg0: Vector4d, paramarg1: Matrix4x3dc): void;
    static timesAssign(paramarg0: Vector4d, paramarg1: Matrix4x3fc): void;
    static timesAssign(paramarg0: Vector4d, paramarg1: Vector4dc): void;
    static timesAssign(paramarg0: Vector4d, paramarg1: Vector4fc): void;
    static unaryMinus(paramarg0: Vector4dc): Vector4d;
}