import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
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
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
export interface Vector3fc extends Object{
    absolute(arg0: Vector3f): Vector3f;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    add(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    angle(arg0: Vector3fc): number;
    angleCos(arg0: Vector3fc): number;
    angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    angleSigned(arg0: Vector3fc, arg1: Vector3fc): number;
    ceil(arg0: Vector3f): Vector3f;
    cross(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    cross(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3fc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3fc): number;
    div(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    div(arg0: number, arg1: Vector3f): Vector3f;
    div(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    dot(arg0: number, arg1: number, arg2: number): number;
    dot(arg0: Vector3fc): number;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    equals(arg0: Vector3fc, arg1: number): boolean;
    floor(arg0: Vector3f): Vector3f;
    fma(arg0: number, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    fma(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector3i): Vector3i;
    get(arg0: Vector3d): Vector3d;
    get(arg0: Vector3f): Vector3f;
    getToAddress(arg0: number): Vector3fc;
    half(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    half(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    hermite(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3fc, arg3: number, arg4: Vector3f): Vector3f;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector3fc, arg1: number, arg2: Vector3f): Vector3f;
    max(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    maxComponent(): number;
    min(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    minComponent(): number;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    mul(arg0: number, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3dc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3fc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3x2dc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3x2fc, arg1: Vector3f): Vector3f;
    mul(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    mulAdd(arg0: number, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    mulAdd(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4x3dc, arg1: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4x3dc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f;
    mulPositionGeneric(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulPositionGeneric(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4x3dc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f;
    mulPositionW(arg0: Matrix4dc, arg1: Vector3f): number;
    mulPositionW(arg0: Matrix4fc, arg1: Vector3f): number;
    mulProject(arg0: Matrix4fc, arg1: number, arg2: Vector3f): Vector3f;
    mulProject(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulProjectAffine(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulProjectGeneric(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulProjectTranslation(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulTranspose(arg0: Matrix3fc, arg1: Vector3f): Vector3f;
    mulTransposeDirection(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulTransposePosition(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulTransposePosition(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    negate(arg0: Vector3f): Vector3f;
    normalize(arg0: number, arg1: Vector3f): Vector3f;
    normalize(arg0: Vector3f): Vector3f;
    orthogonalize(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    orthogonalizeUnit(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    reflect(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    reflect(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    rotate(arg0: Quaternionfc, arg1: Vector3f): Vector3f;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3f): Vector3f;
    rotateX(arg0: number, arg1: Vector3f): Vector3f;
    rotateY(arg0: number, arg1: Vector3f): Vector3f;
    rotateZ(arg0: number, arg1: Vector3f): Vector3f;
    rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    rotationTo(arg0: Vector3fc, arg1: Quaternionf): Quaternionf;
    round(arg0: Vector3f): Vector3f;
    smoothStep(arg0: Vector3fc, arg1: number, arg2: Vector3f): Vector3f;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    sub(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    x(): number;
    y(): number;
    z(): number;
}