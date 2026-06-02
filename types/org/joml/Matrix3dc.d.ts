import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export interface Matrix3dc extends Object{
    add(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    cofactor(arg0: Matrix3d): Matrix3d;
    determinant(): number;
    equals(arg0: Matrix3dc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
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
    invert(arg0: Matrix3d): Matrix3d;
    isFinite(): boolean;
    lerp(arg0: Matrix3dc, arg1: number, arg2: Matrix3d): Matrix3d;
    lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3d): Matrix3d;
    lookAlong(arg0: Vector3dc, arg1: Vector3dc, arg2: Matrix3d): Matrix3d;
    m00(): number;
    m01(): number;
    m02(): number;
    m10(): number;
    m11(): number;
    m12(): number;
    m20(): number;
    m21(): number;
    m22(): number;
    mapXZY(arg0: Matrix3d): Matrix3d;
    mapXZnY(arg0: Matrix3d): Matrix3d;
    mapXnYnZ(arg0: Matrix3d): Matrix3d;
    mapXnZY(arg0: Matrix3d): Matrix3d;
    mapXnZnY(arg0: Matrix3d): Matrix3d;
    mapYXZ(arg0: Matrix3d): Matrix3d;
    mapYXnZ(arg0: Matrix3d): Matrix3d;
    mapYZX(arg0: Matrix3d): Matrix3d;
    mapYZnX(arg0: Matrix3d): Matrix3d;
    mapYnXZ(arg0: Matrix3d): Matrix3d;
    mapYnXnZ(arg0: Matrix3d): Matrix3d;
    mapYnZX(arg0: Matrix3d): Matrix3d;
    mapYnZnX(arg0: Matrix3d): Matrix3d;
    mapZXY(arg0: Matrix3d): Matrix3d;
    mapZXnY(arg0: Matrix3d): Matrix3d;
    mapZYX(arg0: Matrix3d): Matrix3d;
    mapZYnX(arg0: Matrix3d): Matrix3d;
    mapZnXY(arg0: Matrix3d): Matrix3d;
    mapZnXnY(arg0: Matrix3d): Matrix3d;
    mapZnYX(arg0: Matrix3d): Matrix3d;
    mapZnYnX(arg0: Matrix3d): Matrix3d;
    mapnXYnZ(arg0: Matrix3d): Matrix3d;
    mapnXZY(arg0: Matrix3d): Matrix3d;
    mapnXZnY(arg0: Matrix3d): Matrix3d;
    mapnXnYZ(arg0: Matrix3d): Matrix3d;
    mapnXnYnZ(arg0: Matrix3d): Matrix3d;
    mapnXnZY(arg0: Matrix3d): Matrix3d;
    mapnXnZnY(arg0: Matrix3d): Matrix3d;
    mapnYXZ(arg0: Matrix3d): Matrix3d;
    mapnYXnZ(arg0: Matrix3d): Matrix3d;
    mapnYZX(arg0: Matrix3d): Matrix3d;
    mapnYZnX(arg0: Matrix3d): Matrix3d;
    mapnYnXZ(arg0: Matrix3d): Matrix3d;
    mapnYnXnZ(arg0: Matrix3d): Matrix3d;
    mapnYnZX(arg0: Matrix3d): Matrix3d;
    mapnYnZnX(arg0: Matrix3d): Matrix3d;
    mapnZXY(arg0: Matrix3d): Matrix3d;
    mapnZXnY(arg0: Matrix3d): Matrix3d;
    mapnZYX(arg0: Matrix3d): Matrix3d;
    mapnZYnX(arg0: Matrix3d): Matrix3d;
    mapnZnXY(arg0: Matrix3d): Matrix3d;
    mapnZnXnY(arg0: Matrix3d): Matrix3d;
    mapnZnYX(arg0: Matrix3d): Matrix3d;
    mapnZnYnX(arg0: Matrix3d): Matrix3d;
    mul(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    mul(arg0: Matrix3fc, arg1: Matrix3d): Matrix3d;
    mulComponentWise(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    mulLocal(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    negateX(arg0: Matrix3d): Matrix3d;
    negateY(arg0: Matrix3d): Matrix3d;
    negateZ(arg0: Matrix3d): Matrix3d;
    normal(arg0: Matrix3d): Matrix3d;
    normalizedPositiveX(arg0: Vector3d): Vector3d;
    normalizedPositiveY(arg0: Vector3d): Vector3d;
    normalizedPositiveZ(arg0: Vector3d): Vector3d;
    obliqueZ(arg0: number, arg1: number, arg2: Matrix3d): Matrix3d;
    positiveX(arg0: Vector3d): Vector3d;
    positiveY(arg0: Vector3d): Vector3d;
    positiveZ(arg0: Vector3d): Vector3d;
    quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
    quadraticFormProduct(arg0: Vector3dc): number;
    quadraticFormProduct(arg0: Vector3fc): number;
    reflect(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    reflect(arg0: Quaterniondc, arg1: Matrix3d): Matrix3d;
    reflect(arg0: Vector3dc, arg1: Matrix3d): Matrix3d;
    rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3d): Matrix3d;
    rotate(arg0: number, arg1: Vector3dc, arg2: Matrix3d): Matrix3d;
    rotate(arg0: number, arg1: Vector3fc, arg2: Matrix3d): Matrix3d;
    rotate(arg0: AxisAngle4d, arg1: Matrix3d): Matrix3d;
    rotate(arg0: AxisAngle4f, arg1: Matrix3d): Matrix3d;
    rotate(arg0: Quaterniondc, arg1: Matrix3d): Matrix3d;
    rotate(arg0: Quaternionfc, arg1: Matrix3d): Matrix3d;
    rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3d): Matrix3d;
    rotateLocal(arg0: Quaterniondc, arg1: Matrix3d): Matrix3d;
    rotateLocal(arg0: Quaternionfc, arg1: Matrix3d): Matrix3d;
    rotateLocalX(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateLocalY(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateLocalZ(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3d): Matrix3d;
    rotateTowards(arg0: Vector3dc, arg1: Vector3dc, arg2: Matrix3d): Matrix3d;
    rotateX(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    rotateY(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    rotateZ(arg0: number, arg1: Matrix3d): Matrix3d;
    rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    scale(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    scale(arg0: number, arg1: Matrix3d): Matrix3d;
    scale(arg0: Vector3dc, arg1: Matrix3d): Matrix3d;
    scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix3d): Matrix3d;
    sub(arg0: Matrix3dc, arg1: Matrix3d): Matrix3d;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transform(arg0: Vector3d): Vector3d;
    transform(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transform(arg0: Vector3f): Vector3f;
    transform(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transformTranspose(arg0: Vector3d): Vector3d;
    transformTranspose(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transpose(arg0: Matrix3d): Matrix3d;
}