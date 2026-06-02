import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3d } from '../../org/joml/Matrix4x3d.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3f } from '../../org/joml/Matrix4x3f.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Quaternionf extends Object implements Externalizable, Cloneable, Quaternionfc {
    static nlerp(paramarg0: (Object | null)[], paramarg1: number[], paramarg2: Quaternionf): Quaternionfc;
    static nlerpIterative(paramarg0: (Object | null)[], paramarg1: number[], paramarg2: number, paramarg3: Quaternionf): Quaternionfc;
    static slerp(paramarg0: (Object | null)[], paramarg1: number[], paramarg2: Quaternionf): Quaternionfc;
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: AxisAngle4d)
    constructor(arg0: AxisAngle4f)
    constructor(arg0: Quaterniondc)
    constructor(arg0: Quaternionfc)
    w: number;
    x: number;
    y: number;
    z: number;
    add(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    add(arg0: Quaternionfc): Quaternionf;
    add(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    angle(): number;
    protected clone(): Object;
    clone(): Object;
    conjugate(): Quaternionf;
    conjugate(arg0: Quaternionf): Quaternionf;
    conjugateBy(arg0: Quaternionfc): Quaternionf;
    conjugateBy(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    difference(arg0: Quaternionf): Quaternionf;
    difference(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    div(arg0: number): Quaternionf;
    div(arg0: number, arg1: Quaternionf): Quaternionf;
    div(arg0: Quaternionfc): Quaternionf;
    div(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    dot(arg0: Quaternionf): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    equals(arg0: Quaternionfc, arg1: number): boolean;
    fromAxisAngleDeg(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    fromAxisAngleDeg(arg0: Vector3fc, arg1: number): Quaternionf;
    fromAxisAngleRad(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    fromAxisAngleRad(arg0: Vector3fc, arg1: number): Quaternionf;
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
    hashCode(): number;
    identity(): Quaternionf;
    integrate(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    integrate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    invert(): Quaternionf;
    invert(arg0: Quaternionf): Quaternionf;
    isFinite(): boolean;
    lengthSquared(): number;
    lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Quaternionf;
    lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaternionf): Quaternionf;
    lookAlong(arg0: Vector3fc, arg1: Vector3fc): Quaternionf;
    lookAlong(arg0: Vector3fc, arg1: Vector3fc, arg2: Quaternionf): Quaternionf;
    mul(arg0: number): Quaternionf;
    mul(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    mul(arg0: number, arg1: Quaternionf): Quaternionf;
    mul(arg0: Quaternionfc): Quaternionf;
    mul(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    nlerp(arg0: Quaternionfc, arg1: number): Quaternionf;
    nlerp(arg0: Quaternionfc, arg1: number, arg2: Quaternionf): Quaternionf;
    nlerpIterative(arg0: Quaternionfc, arg1: number, arg2: number): Quaternionf;
    nlerpIterative(arg0: Quaternionfc, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    normalize(): Quaternionf;
    normalize(arg0: Quaternionf): Quaternionf;
    normalizedPositiveX(arg0: Vector3f): Vector3f;
    normalizedPositiveY(arg0: Vector3f): Vector3f;
    normalizedPositiveZ(arg0: Vector3f): Vector3f;
    positiveX(arg0: Vector3f): Vector3f;
    positiveY(arg0: Vector3f): Vector3f;
    positiveZ(arg0: Vector3f): Vector3f;
    premul(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    premul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    premul(arg0: Quaternionfc): Quaternionf;
    premul(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    readExternal(arg0: ObjectInput): void;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    rotateAxis(arg0: number, arg1: Vector3fc): Quaternionf;
    rotateAxis(arg0: number, arg1: Vector3fc, arg2: Quaternionf): Quaternionf;
    rotateLocalX(arg0: number): Quaternionf;
    rotateLocalX(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateLocalY(arg0: number): Quaternionf;
    rotateLocalY(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateLocalZ(arg0: number): Quaternionf;
    rotateLocalZ(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Quaternionf;
    rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Quaternionf): Quaternionf;
    rotateTo(arg0: Vector3fc, arg1: Vector3fc): Quaternionf;
    rotateTo(arg0: Vector3fc, arg1: Vector3fc, arg2: Quaternionf): Quaternionf;
    rotateX(arg0: number): Quaternionf;
    rotateX(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateXYZ(arg0: number, arg1: number, arg2: number): Quaternionf;
    rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    rotateY(arg0: number): Quaternionf;
    rotateY(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateYXZ(arg0: number, arg1: number, arg2: number): Quaternionf;
    rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    rotateZ(arg0: number): Quaternionf;
    rotateZ(arg0: number, arg1: Quaternionf): Quaternionf;
    rotateZYX(arg0: number, arg1: number, arg2: number): Quaternionf;
    rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    rotationAxis(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    rotationAxis(arg0: number, arg1: Vector3fc): Quaternionf;
    rotationAxis(arg0: AxisAngle4f): Quaternionf;
    rotationTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Quaternionf;
    rotationTo(arg0: Vector3fc, arg1: Vector3fc): Quaternionf;
    rotationX(arg0: number): Quaternionf;
    rotationXYZ(arg0: number, arg1: number, arg2: number): Quaternionf;
    rotationY(arg0: number): Quaternionf;
    rotationYXZ(arg0: number, arg1: number, arg2: number): Quaternionf;
    rotationZ(arg0: number): Quaternionf;
    rotationZYX(arg0: number, arg1: number, arg2: number): Quaternionf;
    scale(arg0: number): Quaternionf;
    scale(arg0: number, arg1: Quaternionf): Quaternionf;
    scaling(arg0: number): Quaternionf;
    set(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    set(arg0: AxisAngle4d): Quaternionf;
    set(arg0: AxisAngle4f): Quaternionf;
    set(arg0: Quaterniondc): Quaternionf;
    set(arg0: Quaternionfc): Quaternionf;
    setAngleAxis(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    setAngleAxis(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    // private setFromNormalized(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    // private setFromNormalized(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    setFromNormalized(arg0: Matrix3dc): Quaternionf;
    setFromNormalized(arg0: Matrix3fc): Quaternionf;
    setFromNormalized(arg0: Matrix4dc): Quaternionf;
    setFromNormalized(arg0: Matrix4fc): Quaternionf;
    setFromNormalized(arg0: Matrix4x3dc): Quaternionf;
    setFromNormalized(arg0: Matrix4x3fc): Quaternionf;
    // private setFromUnnormalized(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    // private setFromUnnormalized(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    setFromUnnormalized(arg0: Matrix3dc): Quaternionf;
    setFromUnnormalized(arg0: Matrix3fc): Quaternionf;
    setFromUnnormalized(arg0: Matrix4dc): Quaternionf;
    setFromUnnormalized(arg0: Matrix4fc): Quaternionf;
    setFromUnnormalized(arg0: Matrix4x3dc): Quaternionf;
    setFromUnnormalized(arg0: Matrix4x3fc): Quaternionf;
    slerp(arg0: Quaternionfc, arg1: number): Quaternionf;
    slerp(arg0: Quaternionfc, arg1: number, arg2: Quaternionf): Quaternionf;
    sub(arg0: number, arg1: number, arg2: number, arg3: number): Quaternionf;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Quaternionf): Quaternionf;
    sub(arg0: Quaternionfc): Quaternionf;
    sub(arg0: Quaternionfc, arg1: Quaternionf): Quaternionf;
    toString(): string;
    toString(arg0: NumberFormat): string;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector4d): Vector4d;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
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
    transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
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
    transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
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
    transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
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
    writeExternal(arg0: ObjectOutput): void;
    x(): number;
    y(): number;
    z(): number;
}