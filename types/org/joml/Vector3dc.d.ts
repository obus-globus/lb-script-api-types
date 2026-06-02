import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
export interface Vector3dc extends Object{
    absolute(arg0: Vector3d): Vector3d;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    add(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    add(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    angle(arg0: Vector3dc): number;
    angleCos(arg0: Vector3dc): number;
    angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    angleSigned(arg0: Vector3dc, arg1: Vector3dc): number;
    ceil(arg0: Vector3d): Vector3d;
    cross(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    cross(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3dc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3dc): number;
    div(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    div(arg0: number, arg1: Vector3d): Vector3d;
    div(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    div(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    dot(arg0: number, arg1: number, arg2: number): number;
    dot(arg0: Vector3dc): number;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    equals(arg0: Vector3dc, arg1: number): boolean;
    floor(arg0: Vector3d): Vector3d;
    fma(arg0: number, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    fma(arg0: number, arg1: Vector3fc, arg2: Vector3d): Vector3d;
    fma(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    fma(arg0: Vector3dc, arg1: Vector3fc, arg2: Vector3d): Vector3d;
    fma(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3d): Vector3d;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector3i): Vector3i;
    get(arg0: Vector3d): Vector3d;
    get(arg0: Vector3f): Vector3f;
    getToAddress(arg0: number): Vector3dc;
    getf(arg0: ByteBuffer): ByteBuffer;
    getf(arg0: number, arg1: ByteBuffer): ByteBuffer;
    half(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    half(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    hermite(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3dc, arg3: number, arg4: Vector3d): Vector3d;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector3dc, arg1: number, arg2: Vector3d): Vector3d;
    max(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    maxComponent(): number;
    min(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    mul(arg0: number, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3dc, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3dc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3fc, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3x2dc, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3x2fc, arg1: Vector3d): Vector3d;
    mul(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    mul(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    mulAdd(arg0: number, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    mulAdd(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    mulAdd(arg0: Vector3fc, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPositionW(arg0: Matrix4dc, arg1: Vector3d): number;
    mulPositionW(arg0: Matrix4fc, arg1: Vector3d): number;
    mulProject(arg0: Matrix4dc, arg1: number, arg2: Vector3d): Vector3d;
    mulProject(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProject(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectAffine(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectGeneric(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectTranslation(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulTranspose(arg0: Matrix3dc, arg1: Vector3d): Vector3d;
    mulTranspose(arg0: Matrix3fc, arg1: Vector3d): Vector3d;
    mulTransposeDirection(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulTransposeDirection(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulTransposePosition(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulTransposePosition(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    negate(arg0: Vector3d): Vector3d;
    normalize(arg0: number, arg1: Vector3d): Vector3d;
    normalize(arg0: Vector3d): Vector3d;
    orthogonalize(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    orthogonalizeUnit(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    reflect(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    reflect(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    rotate(arg0: Quaterniondc, arg1: Vector3d): Vector3d;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3d): Vector3d;
    rotateX(arg0: number, arg1: Vector3d): Vector3d;
    rotateY(arg0: number, arg1: Vector3d): Vector3d;
    rotateZ(arg0: number, arg1: Vector3d): Vector3d;
    rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaterniond): Quaterniond;
    rotationTo(arg0: Vector3dc, arg1: Quaterniond): Quaterniond;
    round(arg0: Vector3d): Vector3d;
    smoothStep(arg0: Vector3dc, arg1: number, arg2: Vector3d): Vector3d;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    sub(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    sub(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    x(): number;
    y(): number;
    z(): number;
}