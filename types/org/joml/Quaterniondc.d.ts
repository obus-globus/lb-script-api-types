import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
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
export interface Quaterniondc extends Object{
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaterniond): Quaterniond;
    add(arg0: Quaterniondc, arg1: Quaterniond): Quaterniond;
    angle(): number;
    conjugate(arg0: Quaterniond): Quaterniond;
    conjugateBy(arg0: Quaterniondc, arg1: Quaterniond): Quaterniond;
    difference(arg0: Quaterniondc, arg1: Quaterniond): Quaterniond;
    div(arg0: number, arg1: Quaterniond): Quaterniond;
    div(arg0: Quaterniondc, arg1: Quaterniond): Quaterniond;
    dot(arg0: Quaterniondc): number;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    equals(arg0: Quaterniondc, arg1: number): boolean;
    get(arg0: AxisAngle4d): AxisAngle4d;
    get(arg0: AxisAngle4f): AxisAngle4f;
    get(arg0: Matrix3d): Matrix3d;
    get(arg0: Matrix3f): Matrix3f;
    get(arg0: Matrix4d): Matrix4d;
    get(arg0: Matrix4f): Matrix4f;
    get(arg0: Quaterniond): Quaterniond;
    get(arg0: Quaternionf): Quaternionf;
    getEulerAnglesXYZ(arg0: Vector3d): Vector3d;
    getEulerAnglesYXZ(arg0: Vector3d): Vector3d;
    getEulerAnglesZXY(arg0: Vector3d): Vector3d;
    getEulerAnglesZYX(arg0: Vector3d): Vector3d;
    integrate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaterniond): Quaterniond;
    invert(arg0: Quaterniond): Quaterniond;
    isFinite(): boolean;
    lengthSquared(): number;
    lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaterniond): Quaterniond;
    lookAlong(arg0: Vector3dc, arg1: Vector3dc, arg2: Quaterniond): Quaterniond;
    mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaterniond): Quaterniond;
    mul(arg0: number, arg1: Quaterniond): Quaterniond;
    mul(arg0: Quaterniondc, arg1: Quaterniond): Quaterniond;
    nlerp(arg0: Quaterniondc, arg1: number, arg2: Quaterniond): Quaterniond;
    nlerpIterative(arg0: Quaterniondc, arg1: number, arg2: number, arg3: Quaterniond): Quaterniond;
    normalize(arg0: Quaterniond): Quaterniond;
    normalizedPositiveX(arg0: Vector3d): Vector3d;
    normalizedPositiveY(arg0: Vector3d): Vector3d;
    normalizedPositiveZ(arg0: Vector3d): Vector3d;
    positiveX(arg0: Vector3d): Vector3d;
    positiveY(arg0: Vector3d): Vector3d;
    positiveZ(arg0: Vector3d): Vector3d;
    premul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaterniond): Quaterniond;
    premul(arg0: Quaterniondc, arg1: Quaterniond): Quaterniond;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaterniond): Quaterniond;
    rotateAxis(arg0: number, arg1: Vector3dc, arg2: Quaterniond): Quaterniond;
    rotateLocalX(arg0: number, arg1: Quaterniond): Quaterniond;
    rotateLocalY(arg0: number, arg1: Quaterniond): Quaterniond;
    rotateLocalZ(arg0: number, arg1: Quaterniond): Quaterniond;
    rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaterniond): Quaterniond;
    rotateTo(arg0: Vector3dc, arg1: Vector3dc, arg2: Quaterniond): Quaterniond;
    rotateX(arg0: number, arg1: Quaterniond): Quaterniond;
    rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Quaterniond): Quaterniond;
    rotateY(arg0: number, arg1: Quaterniond): Quaterniond;
    rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Quaterniond): Quaterniond;
    rotateZ(arg0: number, arg1: Quaterniond): Quaterniond;
    rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Quaterniond): Quaterniond;
    scale(arg0: number, arg1: Quaterniond): Quaterniond;
    slerp(arg0: Quaterniondc, arg1: number, arg2: Quaterniond): Quaterniond;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaterniond): Quaterniond;
    sub(arg0: Quaterniondc, arg1: Quaterniond): Quaterniond;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
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
    transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
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
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4f): Vector4f;
    transformInverseUnit(arg0: Vector3d): Vector3d;
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
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector4f): Vector4f;
    transformUnit(arg0: Vector3d): Vector3d;
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