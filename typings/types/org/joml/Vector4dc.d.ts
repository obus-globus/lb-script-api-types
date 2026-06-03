import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
export interface Vector4dc extends Object{
    absolute(arg0: Vector4d): Vector4d;
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4d): Vector4d;
    add(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    add(arg0: Vector4fc, arg1: Vector4d): Vector4d;
    angle(arg0: Vector4dc): number;
    angleCos(arg0: Vector4dc): number;
    ceil(arg0: Vector4d): Vector4d;
    distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distance(arg0: Vector4dc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distanceSquared(arg0: Vector4dc): number;
    div(arg0: number, arg1: Vector4d): Vector4d;
    div(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
    dot(arg0: Vector4dc): number;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    equals(arg0: Vector4dc, arg1: number): boolean;
    floor(arg0: Vector4d): Vector4d;
    fma(arg0: number, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    fma(arg0: Vector4dc, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector4i): Vector4i;
    get(arg0: Vector4d): Vector4d;
    get(arg0: Vector4f): Vector4f;
    getToAddress(arg0: number): Vector4dc;
    getf(arg0: ByteBuffer): ByteBuffer;
    getf(arg0: number, arg1: ByteBuffer): ByteBuffer;
    hermite(arg0: Vector4dc, arg1: Vector4dc, arg2: Vector4dc, arg3: number, arg4: Vector4d): Vector4d;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector4dc, arg1: number, arg2: Vector4d): Vector4d;
    max(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    maxComponent(): number;
    min(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    minComponent(): number;
    mul(arg0: number, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4x3dc, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4x3fc, arg1: Vector4d): Vector4d;
    mul(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    mul(arg0: Vector4fc, arg1: Vector4d): Vector4d;
    mulAdd(arg0: number, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    mulAdd(arg0: Vector4dc, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    mulAffine(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulAffine(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mulAffineTranspose(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4x3dc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4x3fc, arg1: Vector4d): Vector4d;
    mulGenericTranspose(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProject(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProject(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4x3dc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4x3fc, arg1: Vector4d): Vector4d;
    mulTranspose(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    negate(arg0: Vector4d): Vector4d;
    normalize(arg0: number, arg1: Vector4d): Vector4d;
    normalize(arg0: Vector4d): Vector4d;
    normalize3(arg0: Vector4d): Vector4d;
    rotate(arg0: Quaterniondc, arg1: Vector4d): Vector4d;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4d): Vector4d;
    rotateX(arg0: number, arg1: Vector4d): Vector4d;
    rotateY(arg0: number, arg1: Vector4d): Vector4d;
    rotateZ(arg0: number, arg1: Vector4d): Vector4d;
    round(arg0: Vector4d): Vector4d;
    smoothStep(arg0: Vector4dc, arg1: number, arg2: Vector4d): Vector4d;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4d): Vector4d;
    sub(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    sub(arg0: Vector4fc, arg1: Vector4d): Vector4d;
    w(): number;
    x(): number;
    y(): number;
    z(): number;
}