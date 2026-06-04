import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
export class Matrix3x2d extends Object implements Externalizable, Cloneable, Matrix3x2dc {
    constructor()
    constructor(arg0: DoubleBuffer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: Matrix2dc)
    constructor(arg0: Matrix2fc)
    constructor(arg0: Matrix3x2dc)
    m00: number;
    m01: number;
    m10: number;
    m11: number;
    m20: number;
    m21: number;
    _m00(arg0: number): Matrix3x2d;
    _m01(arg0: number): Matrix3x2d;
    _m10(arg0: number): Matrix3x2d;
    _m11(arg0: number): Matrix3x2d;
    _m20(arg0: number): Matrix3x2d;
    _m21(arg0: number): Matrix3x2d;
    protected clone(): Object;
    clone(): Object;
    determinant(): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: Matrix3x2dc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: Matrix3x2d): Matrix3x2d;
    get3x3(arg0: ByteBuffer): ByteBuffer;
    get3x3(arg0: DoubleBuffer): DoubleBuffer;
    get3x3(arg0: number[]): number[];
    get3x3(arg0: number[], arg1: number): number[];
    get3x3(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get3x3(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get4x4(arg0: ByteBuffer): ByteBuffer;
    get4x4(arg0: DoubleBuffer): DoubleBuffer;
    get4x4(arg0: number[]): number[];
    get4x4(arg0: number[], arg1: number): number[];
    get4x4(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get4x4(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    getToAddress(arg0: number): Matrix3x2dc;
    getTransposed(arg0: ByteBuffer): ByteBuffer;
    getTransposed(arg0: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: FloatBuffer): FloatBuffer;
    getTransposed(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposed(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getTransposedFloats(arg0: ByteBuffer): ByteBuffer;
    getTransposedFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposedToAddress(arg0: number): Matrix3x2dc;
    hashCode(): number;
    identity(): Matrix3x2d;
    invert(): Matrix3x2d;
    invert(arg0: Matrix3x2d): Matrix3x2d;
    isFinite(): boolean;
    m00(): number;
    m01(): number;
    m10(): number;
    m11(): number;
    m20(): number;
    m21(): number;
    mul(arg0: Matrix3x2dc): Matrix3x2d;
    mul(arg0: Matrix3x2dc, arg1: Matrix3x2d): Matrix3x2d;
    mulLocal(arg0: Matrix3x2dc): Matrix3x2d;
    mulLocal(arg0: Matrix3x2dc, arg1: Matrix3x2d): Matrix3x2d;
    normalizedPositiveX(arg0: Vector2d): Vector2d;
    normalizedPositiveY(arg0: Vector2d): Vector2d;
    origin(arg0: Vector2d): Vector2d;
    positiveX(arg0: Vector2d): Vector2d;
    positiveY(arg0: Vector2d): Vector2d;
    readExternal(arg0: ObjectInput): void;
    rotate(arg0: number): Matrix3x2d;
    rotate(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    rotateAbout(arg0: number, arg1: number, arg2: number): Matrix3x2d;
    rotateAbout(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2d): Matrix3x2d;
    rotateLocal(arg0: number): Matrix3x2d;
    rotateLocal(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    rotateTo(arg0: Vector2dc, arg1: Vector2dc): Matrix3x2d;
    rotateTo(arg0: Vector2dc, arg1: Vector2dc, arg2: Matrix3x2d): Matrix3x2d;
    rotation(arg0: number): Matrix3x2d;
    scale(arg0: number): Matrix3x2d;
    scale(arg0: number, arg1: number): Matrix3x2d;
    scale(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    scale(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    scale(arg0: Vector2dc): Matrix3x2d;
    scale(arg0: Vector2dc, arg1: Matrix3x2d): Matrix3x2d;
    scale(arg0: Vector2fc): Matrix3x2d;
    scale(arg0: Vector2fc, arg1: Matrix3x2d): Matrix3x2d;
    scaleAround(arg0: number, arg1: number, arg2: number): Matrix3x2d;
    scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3x2d;
    scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2d): Matrix3x2d;
    scaleAround(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2d): Matrix3x2d;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number): Matrix3x2d;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Matrix3x2d;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2d): Matrix3x2d;
    scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix3x2d): Matrix3x2d;
    scaleLocal(arg0: number): Matrix3x2d;
    scaleLocal(arg0: number, arg1: number): Matrix3x2d;
    scaleLocal(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    scaleLocal(arg0: number, arg1: Matrix3x2d): Matrix3x2d;
    scaling(arg0: number): Matrix3x2d;
    scaling(arg0: number, arg1: number): Matrix3x2d;
    set(arg0: ByteBuffer): Matrix3x2d;
    set(arg0: DoubleBuffer): Matrix3x2d;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Matrix3x2d;
    set(arg0: number[]): Matrix3x2d;
    set(arg0: number[], arg1: number): Matrix3x2d;
    set(arg0: number, arg1: ByteBuffer): Matrix3x2d;
    set(arg0: number, arg1: DoubleBuffer): Matrix3x2d;
    set(arg0: Matrix2dc): Matrix3x2d;
    set(arg0: Matrix2fc): Matrix3x2d;
    set(arg0: Matrix3x2dc): Matrix3x2d;
    setFromAddress(arg0: number): Matrix3x2d;
    setTranslation(arg0: number, arg1: number): Matrix3x2d;
    setTranslation(arg0: Vector2dc): Matrix3x2d;
    setTransposedFromAddress(arg0: number): Matrix3x2d;
    setView(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3x2d;
    span(arg0: Vector2d, arg1: Vector2d, arg2: Vector2d): Matrix3x2d;
    testAar(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    testCircle(arg0: number, arg1: number, arg2: number): boolean;
    testPoint(arg0: number, arg1: number): boolean;
    toString(): string;
    toString(arg0: NumberFormat): string;
    transform(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    transform(arg0: Vector3d): Vector3d;
    transform(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    transformDirection(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transformDirection(arg0: Vector2d): Vector2d;
    transformDirection(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    transformPosition(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transformPosition(arg0: Vector2d): Vector2d;
    transformPosition(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    translate(arg0: number, arg1: number): Matrix3x2d;
    translate(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    translate(arg0: Vector2dc): Matrix3x2d;
    translate(arg0: Vector2dc, arg1: Matrix3x2d): Matrix3x2d;
    translateLocal(arg0: number, arg1: number): Matrix3x2d;
    translateLocal(arg0: number, arg1: number, arg2: Matrix3x2d): Matrix3x2d;
    translateLocal(arg0: Vector2dc): Matrix3x2d;
    translateLocal(arg0: Vector2dc, arg1: Matrix3x2d): Matrix3x2d;
    translation(arg0: number, arg1: number): Matrix3x2d;
    translation(arg0: Vector2dc): Matrix3x2d;
    unproject(arg0: number, arg1: number, arg2: number[], arg3: Vector2d): Vector2d;
    unprojectInv(arg0: number, arg1: number, arg2: number[], arg3: Vector2d): Vector2d;
    view(arg0: number, arg1: number, arg2: number, arg3: number): Matrix3x2d;
    view(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3x2d): Matrix3x2d;
    viewArea(arg0: number[]): number[];
    writeExternal(arg0: ObjectOutput): void;
    zero(): Matrix3x2d;
}