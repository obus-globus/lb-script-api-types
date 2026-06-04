import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Matrix3d extends Object implements Externalizable, Cloneable, Matrix3dc {
    constructor()
    constructor(arg0: DoubleBuffer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
    constructor(arg0: Matrix2dc)
    constructor(arg0: Matrix2fc)
    constructor(arg0: Matrix3dc)
    constructor(arg0: Matrix3fc)
    constructor(arg0: Matrix4dc)
    constructor(arg0: Matrix4fc)
    constructor(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3dc)
    m00: number;
    m01: number;
    m02: number;
    m10: number;
    m11: number;
    m12: number;
    m20: number;
    m21: number;
    m22: number;
    _m00(arg0: number): Matrix3d;
    _m01(arg0: number): Matrix3d;
    _m02(arg0: number): Matrix3d;
    _m10(arg0: number): Matrix3d;
    _m11(arg0: number): Matrix3d;
    _m12(arg0: number): Matrix3d;
    _m20(arg0: number): Matrix3d;
    _m21(arg0: number): Matrix3d;
    _m22(arg0: number): Matrix3d;
    add(arg0: Matrix3dc): Matrix3d;
    add(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    protected clone(): Object;
    clone(): Object;
    cofactor(): Matrix3d;
    cofactor(arg0: Matrix3d): Matrix3d;
    determinant(): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: Matrix3dc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: number): number;
    get(arg0: Matrix3d): Matrix3d;
    getColumn(arg0: number, arg1: Vector3d): Vector3d;
    getEulerAnglesXYZ(arg0: Vector3d): Vector3d;
    getEulerAnglesYXZ(arg0: Vector3d): Vector3d;
    getEulerAnglesZYX(arg0: Vector3d): Vector3d;
    getFloats(arg0: ByteBuffer): ByteBuffer;
    getFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getNormalizedRotation(arg0: Quaterniond): Quaterniond;
    getNormalizedRotation(arg0: Quaternionf): Quaternionf;
    getRotation(arg0: AxisAngle4f): AxisAngle4f;
    getRow(arg0: number, arg1: Vector3d): Vector3d;
    getRowColumn(arg0: number, arg1: number): number;
    getScale(arg0: Vector3d): Vector3d;
    getToAddress(arg0: number): Matrix3dc;
    getTransposed(arg0: ByteBuffer): ByteBuffer;
    getTransposed(arg0: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: FloatBuffer): FloatBuffer;
    getTransposed(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposed(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getTransposedFloats(arg0: ByteBuffer): ByteBuffer;
    getTransposedFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposedToAddress(arg0: number): Matrix3dc;
    getUnnormalizedRotation(arg0: Quaterniond): Quaterniond;
    getUnnormalizedRotation(arg0: Quaternionf): Quaternionf;
    hashCode(): number;
    identity(): Matrix3d;
    invert(): Matrix3d;
    invert(arg0: Matrix3d): Matrix3d;
    isFinite(): boolean;
    lerp(arg0: Matrix3dc, arg1: number): Matrix3d;
    lerp(arg0: Matrix3dc, arg1: number, arg2: Matrix3d): Matrix3d;
    lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Matrix3d;
    lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3d): Matrix3d;
    lookAlong(arg0: Vector3dc, arg1: Vector3dc): Matrix3d;
    lookAlong(arg0: Vector3dc, arg1: Vector3dc, arg2: Matrix3d): Matrix3d;
    m00(): number;
    m00(arg0: number): Matrix3d;
    m01(): number;
    m01(arg0: number): Matrix3d;
    m02(): number;
    m02(arg0: number): Matrix3d;
    m10(): number;
    m10(arg0: number): Matrix3d;
    m11(): number;
    m11(arg0: number): Matrix3d;
    m12(): number;
    m12(arg0: number): Matrix3d;
    m20(): number;
    m20(arg0: number): Matrix3d;
    m21(): number;
    m21(arg0: number): Matrix3d;
    m22(): number;
    m22(arg0: number): Matrix3d;
    mapXZY(): Matrix3d;
    mapXZY(arg0: Matrix3d): Matrix3d;
    mapXZnY(): Matrix3d;
    mapXZnY(arg0: Matrix3d): Matrix3d;
    mapXnYnZ(): Matrix3d;
    mapXnYnZ(arg0: Matrix3d): Matrix3d;
    mapXnZY(): Matrix3d;
    mapXnZY(arg0: Matrix3d): Matrix3d;
    mapXnZnY(): Matrix3d;
    mapXnZnY(arg0: Matrix3d): Matrix3d;
    mapYXZ(): Matrix3d;
    mapYXZ(arg0: Matrix3d): Matrix3d;
    mapYXnZ(): Matrix3d;
    mapYXnZ(arg0: Matrix3d): Matrix3d;
    mapYZX(): Matrix3d;
    mapYZX(arg0: Matrix3d): Matrix3d;
    mapYZnX(): Matrix3d;
    mapYZnX(arg0: Matrix3d): Matrix3d;
    mapYnXZ(): Matrix3d;
    mapYnXZ(arg0: Matrix3d): Matrix3d;
    mapYnXnZ(): Matrix3d;
    mapYnXnZ(arg0: Matrix3d): Matrix3d;
    mapYnZX(): Matrix3d;
    mapYnZX(arg0: Matrix3d): Matrix3d;
    mapYnZnX(): Matrix3d;
    mapYnZnX(arg0: Matrix3d): Matrix3d;
    mapZXY(): Matrix3d;
    mapZXY(arg0: Matrix3d): Matrix3d;
    mapZXnY(): Matrix3d;
    mapZXnY(arg0: Matrix3d): Matrix3d;
    mapZYX(): Matrix3d;
    mapZYX(arg0: Matrix3d): Matrix3d;
    mapZYnX(): Matrix3d;
    mapZYnX(arg0: Matrix3d): Matrix3d;
    mapZnXY(): Matrix3d;
    mapZnXY(arg0: Matrix3d): Matrix3d;
    mapZnXnY(): Matrix3d;
    mapZnXnY(arg0: Matrix3d): Matrix3d;
    mapZnYX(): Matrix3d;
    mapZnYX(arg0: Matrix3d): Matrix3d;
    mapZnYnX(): Matrix3d;
    mapZnYnX(arg0: Matrix3d): Matrix3d;
    mapnXYnZ(): Matrix3d;
    mapnXYnZ(arg0: Matrix3d): Matrix3d;
    mapnXZY(): Matrix3d;
    mapnXZY(arg0: Matrix3d): Matrix3d;
    mapnXZnY(): Matrix3d;
    mapnXZnY(arg0: Matrix3d): Matrix3d;
    mapnXnYZ(): Matrix3d;
    mapnXnYZ(arg0: Matrix3d): Matrix3d;
    mapnXnYnZ(): Matrix3d;
    mapnXnYnZ(arg0: Matrix3d): Matrix3d;
    mapnXnZY(): Matrix3d;
    mapnXnZY(arg0: Matrix3d): Matrix3d;
    mapnXnZnY(): Matrix3d;
    mapnXnZnY(arg0: Matrix3d): Matrix3d;
    mapnYXZ(): Matrix3d;
    mapnYXZ(arg0: Matrix3d): Matrix3d;
    mapnYXnZ(): Matrix3d;
    mapnYXnZ(arg0: Matrix3d): Matrix3d;
    mapnYZX(): Matrix3d;
    mapnYZX(arg0: Matrix3d): Matrix3d;
    mapnYZnX(): Matrix3d;
    mapnYZnX(arg0: Matrix3d): Matrix3d;
    mapnYnXZ(): Matrix3d;
    mapnYnXZ(arg0: Matrix3d): Matrix3d;
    mapnYnXnZ(): Matrix3d;
    mapnYnXnZ(arg0: Matrix3d): Matrix3d;
    mapnYnZX(): Matrix3d;
    mapnYnZX(arg0: Matrix3d): Matrix3d;
    mapnYnZnX(): Matrix3d;
    mapnYnZnX(arg0: Matrix3d): Matrix3d;
    mapnZXY(): Matrix3d;
    mapnZXY(arg0: Matrix3d): Matrix3d;
    mapnZXnY(): Matrix3d;
    mapnZXnY(arg0: Matrix3d): Matrix3d;
    mapnZYX(): Matrix3d;
    mapnZYX(arg0: Matrix3d): Matrix3d;
    mapnZYnX(): Matrix3d;
    mapnZYnX(arg0: Matrix3d): Matrix3d;
    mapnZnXY(): Matrix3d;
    mapnZnXY(arg0: Matrix3d): Matrix3d;
    mapnZnXnY(): Matrix3d;
    mapnZnXnY(arg0: Matrix3d): Matrix3d;
    mapnZnYX(): Matrix3d;
    mapnZnYX(arg0: Matrix3d): Matrix3d;
    mapnZnYnX(): Matrix3d;
    mapnZnYnX(arg0: Matrix3d): Matrix3d;
    mul(arg0: Matrix3dc): Matrix3d;
    mul(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    mul(arg0: Matrix3fc): Matrix3d;
    mul(arg0: Matrix3fc, arg1: Matrix3d): Matrix3d;
    mulComponentWise(arg0: Matrix3dc): Matrix3d;
    mulComponentWise(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    mulLocal(arg0: Matrix3dc): Matrix3d;
    mulLocal(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    negateX(): Matrix3d;
    negateX(arg0: Matrix3d): Matrix3d;
    negateY(): Matrix3d;
    negateY(arg0: Matrix3d): Matrix3d;
    negateZ(): Matrix3d;
    negateZ(arg0: Matrix3d): Matrix3d;
    normal(): Matrix3d;
    normal(arg0: Matrix3d): Matrix3d;
    normalizedPositiveX(arg0: Vector3d): Vector3d;
    normalizedPositiveY(arg0: Vector3d): Vector3d;
    normalizedPositiveZ(arg0: Vector3d): Vector3d;
    obliqueZ(arg0: number, arg1: number): Matrix3d;
    obliqueZ(arg0: number, arg1: number, arg2: Matrix3d): Matrix3d;
    positiveX(arg0: Vector3d): Vector3d;
    positiveY(arg0: Vector3d): Vector3d;
    positiveZ(arg0: Vector3d): Vector3d;
    quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
    quadraticFormProduct(arg0: Vector3dc): number;
    quadraticFormProduct(arg0: Vector3fc): number;
    readExternal(arg0: ObjectInput): void;
    reflect(arg0: number, arg1: number, arg2: number): Matrix3d;
    reflect(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    reflect(arg0: Quaterniondc): Matrix3d;
    reflect(arg0: Quaterniondc, arg1: Matrix3d): Matrix3d;
    reflect(arg0: Vector3dc): Matrix3d;
    reflect(arg0: Vector3dc, arg1: Matrix3d): Matrix3d;
    reflection(arg0: number, arg1: number, arg2: number): Matrix3d;
    reflection(arg0: Quaterniondc): Matrix3d;
    reflection(arg0: Vector3dc): Matrix3d;
    rotate(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3d;
    rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3d): Matrix3d;
    rotate(arg0: number, arg1: Vector3dc): Matrix3d;
    rotate(arg0: number, arg1: Vector3dc, arg2: Matrix3d): Matrix3d;
    rotate(arg0: number, arg1: Vector3fc): Matrix3d;
    rotate(arg0: number, arg1: Vector3fc, arg2: Matrix3d): Matrix3d;
    rotate(arg0: AxisAngle4d): Matrix3d;
    rotate(arg0: AxisAngle4d, arg1: Matrix3d): Matrix3d;
    rotate(arg0: AxisAngle4f): Matrix3d;
    rotate(arg0: AxisAngle4f, arg1: Matrix3d): Matrix3d;
    rotate(arg0: Quaterniondc): Matrix3d;
    rotate(arg0: Quaterniondc, arg1: Matrix3d): Matrix3d;
    rotate(arg0: Quaternionfc): Matrix3d;
    rotate(arg0: Quaternionfc, arg1: Matrix3d): Matrix3d;
    rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3d;
    rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3d): Matrix3d;
    rotateLocal(arg0: Quaterniondc): Matrix3d;
    rotateLocal(arg0: Quaterniondc, arg1: Matrix3d): Matrix3d;
    rotateLocal(arg0: Quaternionfc): Matrix3d;
    rotateLocal(arg0: Quaternionfc, arg1: Matrix3d): Matrix3d;
    rotateLocalX(arg0: number): Matrix3d;
    rotateLocalX(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateLocalY(arg0: number): Matrix3d;
    rotateLocalY(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateLocalZ(arg0: number): Matrix3d;
    rotateLocalZ(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Matrix3d;
    rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3d): Matrix3d;
    rotateTowards(arg0: Vector3dc, arg1: Vector3dc): Matrix3d;
    rotateTowards(arg0: Vector3dc, arg1: Vector3dc, arg2: Matrix3d): Matrix3d;
    rotateX(arg0: number): Matrix3d;
    rotateX(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateXYZ(arg0: number, arg1: number, arg2: number): Matrix3d;
    rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    rotateY(arg0: number): Matrix3d;
    rotateY(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateYXZ(arg0: number, arg1: number, arg2: number): Matrix3d;
    rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    rotateYXZ(arg0: Vector3d): Matrix3d;
    rotateZ(arg0: number): Matrix3d;
    rotateZ(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateZYX(arg0: number, arg1: number, arg2: number): Matrix3d;
    rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    rotation(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3d;
    rotation(arg0: number, arg1: Vector3dc): Matrix3d;
    rotation(arg0: number, arg1: Vector3fc): Matrix3d;
    rotation(arg0: AxisAngle4d): Matrix3d;
    rotation(arg0: AxisAngle4f): Matrix3d;
    rotation(arg0: Quaterniondc): Matrix3d;
    rotation(arg0: Quaternionfc): Matrix3d;
    rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Matrix3d;
    rotationTowards(arg0: Vector3dc, arg1: Vector3dc): Matrix3d;
    rotationX(arg0: number): Matrix3d;
    rotationXYZ(arg0: number, arg1: number, arg2: number): Matrix3d;
    rotationY(arg0: number): Matrix3d;
    rotationYXZ(arg0: number, arg1: number, arg2: number): Matrix3d;
    rotationZ(arg0: number): Matrix3d;
    rotationZYX(arg0: number, arg1: number, arg2: number): Matrix3d;
    scale(arg0: number): Matrix3d;
    scale(arg0: number, arg1: number, arg2: number): Matrix3d;
    scale(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    scale(arg0: number, arg1: Matrix3d): Matrix3d;
    scale(arg0: Vector3dc): Matrix3d;
    scale(arg0: Vector3dc, arg1: Matrix3d): Matrix3d;
    scaleLocal(arg0: number, arg1: number, arg2: number): Matrix3d;
    scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    scaling(arg0: number): Matrix3d;
    scaling(arg0: number, arg1: number, arg2: number): Matrix3d;
    scaling(arg0: Vector3dc): Matrix3d;
    set(arg0: ByteBuffer): Matrix3d;
    set(arg0: DoubleBuffer): Matrix3d;
    set(arg0: FloatBuffer): Matrix3d;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): Matrix3d;
    set(arg0: number[]): Matrix3d;
    set(arg0: number[], arg1: number): Matrix3d;
    set(arg0: number, arg1: ByteBuffer): Matrix3d;
    set(arg0: number, arg1: DoubleBuffer): Matrix3d;
    set(arg0: number, arg1: FloatBuffer): Matrix3d;
    set(arg0: number, arg1: number, arg2: number): Matrix3d;
    set(arg0: AxisAngle4d): Matrix3d;
    set(arg0: AxisAngle4f): Matrix3d;
    set(arg0: Matrix2dc): Matrix3d;
    set(arg0: Matrix2fc): Matrix3d;
    set(arg0: Matrix3dc): Matrix3d;
    set(arg0: Matrix3fc): Matrix3d;
    set(arg0: Matrix4dc): Matrix3d;
    set(arg0: Matrix4fc): Matrix3d;
    set(arg0: Matrix4x3dc): Matrix3d;
    set(arg0: Quaterniondc): Matrix3d;
    set(arg0: Quaternionfc): Matrix3d;
    set(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3dc): Matrix3d;
    setColumn(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3d;
    setColumn(arg0: number, arg1: Vector3dc): Matrix3d;
    setFloats(arg0: ByteBuffer): Matrix3d;
    setFloats(arg0: number, arg1: ByteBuffer): Matrix3d;
    setFromAddress(arg0: number): Matrix3d;
    setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Matrix3d;
    setLookAlong(arg0: Vector3dc, arg1: Vector3dc): Matrix3d;
    setRow(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3d;
    setRow(arg0: number, arg1: Vector3dc): Matrix3d;
    setRowColumn(arg0: number, arg1: number, arg2: number): Matrix3d;
    setSkewSymmetric(arg0: number, arg1: number, arg2: number): Matrix3d;
    setTransposed(arg0: Matrix3dc): Matrix3d;
    setTransposed(arg0: Matrix3fc): Matrix3d;
    setTransposedFromAddress(arg0: number): Matrix3d;
    sub(arg0: Matrix3dc): Matrix3d;
    sub(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    swap(arg0: Matrix3d): Matrix3d;
    toString(): string;
    toString(arg0: NumberFormat): string;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transform(arg0: Vector3d): Vector3d;
    transform(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transform(arg0: Vector3f): Vector3f;
    transform(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transformTranspose(arg0: Vector3d): Vector3d;
    transformTranspose(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transpose(): Matrix3d;
    transpose(arg0: Matrix3d): Matrix3d;
    writeExternal(arg0: ObjectOutput): void;
    zero(): Matrix3d;
}