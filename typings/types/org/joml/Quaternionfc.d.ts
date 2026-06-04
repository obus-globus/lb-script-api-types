import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
import type { Matrix4x3d } from '../../org/joml/Matrix4x3d.d.ts'
import type { Matrix4x3f } from '../../org/joml/Matrix4x3f.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export interface Quaternionfc extends Object{
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    add(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    angle(): number;
    conjugate(arg0: Quaternionf): Quaternionf;
    conjugateBy(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    difference(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    div(arg0: number, arg1: Quaternionf): Quaternionf;
    div(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    equals(other: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    equals(arg0: Quaternionfc, arg1: number): boolean;
    get(arg0: AxisAngle4d): AxisAngle4d;
    get(arg0: AxisAngle4f): AxisAngle4f;
    get(arg0: Matrix3d): Matrix3d;
    get(arg0: Matrix3f): Matrix3f;
    get(arg0: Matrix4d): Matrix4d;
    get(arg0: Matrix4f): Matrix4f;
    get(arg0: Matrix4x3d): Matrix4x3d;
    get(arg0: Matrix4x3f): Matrix4x3f;
    get(arg0: Quaterniond): Quaterniond;
    get(arg0: Quaternionf): Quaternionf;
    getAsMatrix3f(arg0: ByteBuffer): ByteBuffer;
    getAsMatrix3f(arg0: FloatBuffer): FloatBuffer;
    getAsMatrix4f(arg0: ByteBuffer): ByteBuffer;
    getAsMatrix4f(arg0: FloatBuffer): FloatBuffer;
    getAsMatrix4x3f(arg0: ByteBuffer): ByteBuffer;
    getAsMatrix4x3f(arg0: FloatBuffer): FloatBuffer;
    getEulerAnglesXYZ(arg0: Vector3f): Vector3f;
    getEulerAnglesYXZ(arg0: Vector3f): Vector3f;
    getEulerAnglesZXY(arg0: Vector3f): Vector3f;
    getEulerAnglesZYX(arg0: Vector3f): Vector3f;
    integrate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    invert(arg0: Quaternionf): Quaternionf;
    isFinite(): boolean;
    lengthSquared(): number;
    lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaternionf): Quaternionf;
    lookAlong(arg0: Vector3fc, arg1: Vector3fc, arg2: Quaternionf): Quaternionf;
    mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    mul(arg0: number, arg1: Quaternionf): Quaternionf;
    mul(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    nlerp(arg0: Quaternionfc, arg1: number, arg2: Quaternionf): Quaternionf;
    nlerpIterative(arg0: Quaternionfc, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    normalize(arg0: Quaternionf): Quaternionf;
    normalizedPositiveX(arg0: Vector3f): Vector3f;
    normalizedPositiveY(arg0: Vector3f): Vector3f;
    normalizedPositiveZ(arg0: Vector3f): Vector3f;
    positiveX(arg0: Vector3f): Vector3f;
    positiveY(arg0: Vector3f): Vector3f;
    positiveZ(arg0: Vector3f): Vector3f;
    premul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    premul(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    rotateAxis(arg0: number, arg1: Vector3fc, arg2: Quaternionf): Quaternionf;
    rotateLocalX(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateLocalY(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateLocalZ(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaternionf): Quaternionf;
    rotateTo(arg0: Vector3fc, arg1: Vector3fc, arg2: Quaternionf): Quaternionf;
    rotateX(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    rotateY(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    rotateZ(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    scale(arg0: number, arg1: Quaternionf): Quaternionf;
    slerp(arg0: Quaternionfc, arg1: number, arg2: Quaternionf): Quaternionf;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    sub(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector4f): Vector4f;
    transform(arg0: Vector3d): Vector3d;
    transform(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transform(arg0: Vector3f): Vector3f;
    transform(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transform(arg0: Vector4d): Vector4d;
    transform(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    transform(arg0: Vector4f): Vector4f;
    transform(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
    transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector4f): Vector4f;
    transformInverse(arg0: Vector3d): Vector3d;
    transformInverse(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transformInverse(arg0: Vector3f): Vector3f;
    transformInverse(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transformInverse(arg0: Vector4d): Vector4d;
    transformInverse(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    transformInverse(arg0: Vector4f): Vector4f;
    transformInverse(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4f): Vector4f;
    transformInverseUnit(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transformInverseUnit(arg0: Vector3f): Vector3f;
    transformInverseUnit(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transformInverseUnit(arg0: Vector4d): Vector4d;
    transformInverseUnit(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    transformInverseUnit(arg0: Vector4f): Vector4f;
    transformInverseUnit(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    transformPositiveX(arg0: Vector3d): Vector3d;
    transformPositiveX(arg0: Vector3f): Vector3f;
    transformPositiveX(arg0: Vector4d): Vector4d;
    transformPositiveX(arg0: Vector4f): Vector4f;
    transformPositiveY(arg0: Vector3d): Vector3d;
    transformPositiveY(arg0: Vector3f): Vector3f;
    transformPositiveY(arg0: Vector4d): Vector4d;
    transformPositiveY(arg0: Vector4f): Vector4f;
    transformPositiveZ(arg0: Vector3d): Vector3d;
    transformPositiveZ(arg0: Vector3f): Vector3f;
    transformPositiveZ(arg0: Vector4d): Vector4d;
    transformPositiveZ(arg0: Vector4f): Vector4f;
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4f): Vector4f;
    transformUnit(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transformUnit(arg0: Vector3f): Vector3f;
    transformUnit(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transformUnit(arg0: Vector4d): Vector4d;
    transformUnit(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    transformUnit(arg0: Vector4f): Vector4f;
    transformUnit(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    transformUnitPositiveX(arg0: Vector3d): Vector3d;
    transformUnitPositiveX(arg0: Vector3f): Vector3f;
    transformUnitPositiveX(arg0: Vector4d): Vector4d;
    transformUnitPositiveX(arg0: Vector4f): Vector4f;
    transformUnitPositiveY(arg0: Vector3d): Vector3d;
    transformUnitPositiveY(arg0: Vector3f): Vector3f;
    transformUnitPositiveY(arg0: Vector4d): Vector4d;
    transformUnitPositiveY(arg0: Vector4f): Vector4f;
    transformUnitPositiveZ(arg0: Vector3d): Vector3d;
    transformUnitPositiveZ(arg0: Vector3f): Vector3f;
    transformUnitPositiveZ(arg0: Vector4d): Vector4d;
    transformUnitPositiveZ(arg0: Vector4f): Vector4f;
    w(): number;
    x(): number;
    y(): number;
    z(): number;
}