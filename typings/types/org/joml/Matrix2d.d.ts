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
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix3x2d } from '../../org/joml/Matrix3x2d.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
export class Matrix2d extends Object implements Externalizable, Cloneable, Matrix2dc {
    constructor()
    constructor(arg0: DoubleBuffer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: Matrix2dc)
    constructor(arg0: Matrix2fc)
    constructor(arg0: Matrix3dc)
    constructor(arg0: Matrix3fc)
    constructor(arg0: Vector2dc, arg1: Vector2dc)
    _m00(arg0: number): Matrix2d;
    _m01(arg0: number): Matrix2d;
    _m10(arg0: number): Matrix2d;
    _m11(arg0: number): Matrix2d;
    add(arg0: Matrix2dc): Matrix2d;
    add(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    clone(): Object;
    determinant(): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: Matrix2dc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: number): number;
    get(arg0: Matrix2d): Matrix2d;
    get(arg0: Matrix3d): Matrix3d;
    get(arg0: Matrix3x2d): Matrix3x2d;
    getColumn(arg0: number, arg1: Vector2d): Vector2d;
    getFloats(arg0: ByteBuffer): ByteBuffer;
    getFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getRotation(): number;
    getRow(arg0: number, arg1: Vector2d): Vector2d;
    getScale(arg0: Vector2d): Vector2d;
    getToAddress(arg0: number): Matrix2dc;
    getTransposed(arg0: ByteBuffer): ByteBuffer;
    getTransposed(arg0: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: FloatBuffer): FloatBuffer;
    getTransposed(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposed(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    getTransposed(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getTransposedFloats(arg0: ByteBuffer): ByteBuffer;
    getTransposedFloats(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposedToAddress(arg0: number): Matrix2dc;
    hashCode(): number;
    identity(): Matrix2d;
    invert(): Matrix2d;
    invert(arg0: Matrix2d): Matrix2d;
    isFinite(): boolean;
    lerp(arg0: Matrix2dc, arg1: number): Matrix2d;
    lerp(arg0: Matrix2dc, arg1: number, arg2: Matrix2d): Matrix2d;
    m00(): number;
    m00(arg0: number): Matrix2d;
    m01(): number;
    m01(arg0: number): Matrix2d;
    m10(): number;
    m10(arg0: number): Matrix2d;
    m11(): number;
    m11(arg0: number): Matrix2d;
    mul(arg0: Matrix2dc): Matrix2d;
    mul(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    mul(arg0: Matrix2fc): Matrix2d;
    mul(arg0: Matrix2fc, arg1: Matrix2d): Matrix2d;
    mulComponentWise(arg0: Matrix2dc): Matrix2d;
    mulComponentWise(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    mulLocal(arg0: Matrix2dc): Matrix2d;
    mulLocal(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    normal(): Matrix2d;
    normal(arg0: Matrix2d): Matrix2d;
    normalizedPositiveX(arg0: Vector2d): Vector2d;
    normalizedPositiveY(arg0: Vector2d): Vector2d;
    positiveX(arg0: Vector2d): Vector2d;
    positiveY(arg0: Vector2d): Vector2d;
    readExternal(arg0: ObjectInput): void;
    rotate(arg0: number): Matrix2d;
    rotate(arg0: number, arg1: Matrix2d): Matrix2d;
    rotateLocal(arg0: number): Matrix2d;
    rotateLocal(arg0: number, arg1: Matrix2d): Matrix2d;
    rotation(arg0: number): Matrix2d;
    scale(arg0: number): Matrix2d;
    scale(arg0: number, arg1: number): Matrix2d;
    scale(arg0: number, arg1: number, arg2: Matrix2d): Matrix2d;
    scale(arg0: number, arg1: Matrix2d): Matrix2d;
    scale(arg0: Vector2dc): Matrix2d;
    scale(arg0: Vector2dc, arg1: Matrix2d): Matrix2d;
    scaleLocal(arg0: number, arg1: number): Matrix2d;
    scaleLocal(arg0: number, arg1: number, arg2: Matrix2d): Matrix2d;
    scaling(arg0: number): Matrix2d;
    scaling(arg0: number, arg1: number): Matrix2d;
    scaling(arg0: Vector2dc): Matrix2d;
    set(arg0: ByteBuffer): Matrix2d;
    set(arg0: DoubleBuffer): Matrix2d;
    set(arg0: number, arg1: number, arg2: number, arg3: number): Matrix2d;
    set(arg0: number[]): Matrix2d;
    set(arg0: number[], arg1: number): Matrix2d;
    set(arg0: number, arg1: ByteBuffer): Matrix2d;
    set(arg0: number, arg1: DoubleBuffer): Matrix2d;
    set(arg0: number, arg1: number, arg2: number): Matrix2d;
    set(arg0: Matrix2dc): Matrix2d;
    set(arg0: Matrix2fc): Matrix2d;
    set(arg0: Matrix3dc): Matrix2d;
    set(arg0: Matrix3fc): Matrix2d;
    set(arg0: Matrix3x2dc): Matrix2d;
    set(arg0: Matrix3x2fc): Matrix2d;
    set(arg0: Vector2dc, arg1: Vector2dc): Matrix2d;
    setColumn(arg0: number, arg1: number, arg2: number): Matrix2d;
    setColumn(arg0: number, arg1: Vector2dc): Matrix2d;
    setFromAddress(arg0: number): Matrix2d;
    setRow(arg0: number, arg1: number, arg2: number): Matrix2d;
    setRow(arg0: number, arg1: Vector2dc): Matrix2d;
    setTransposedFromAddress(arg0: number): Matrix2d;
    sub(arg0: Matrix2dc): Matrix2d;
    sub(arg0: Matrix2dc, arg1: Matrix2d): Matrix2d;
    swap(arg0: Matrix2d): Matrix2d;
    toString(): string;
    toString(arg0: NumberFormat): string;
    transform(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transform(arg0: Vector2d): Vector2d;
    transform(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    transformTranspose(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    transformTranspose(arg0: Vector2d): Vector2d;
    transformTranspose(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    transpose(): Matrix2d;
    transpose(arg0: Matrix2d): Matrix2d;
    writeExternal(arg0: ObjectOutput): void;
    zero(): Matrix2d;
}