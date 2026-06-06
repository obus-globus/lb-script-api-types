import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
export class Matrix2f extends Object implements Externalizable, Cloneable, Matrix2fc {
    constructor()
    constructor(arg0: FloatBuffer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: Matrix2fc)
    constructor(arg0: Matrix3fc)
    constructor(arg0: Vector2fc, arg1: Vector2fc)
    _m00(arg0: number): Matrix2f;
    _m01(arg0: number): Matrix2f;
    _m10(arg0: number): Matrix2f;
    _m11(arg0: number): Matrix2f;
    add(arg0: Matrix2fc): Matrix2f;
    add(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    protected clone(): Object;
    clone(): Object;
    determinant(): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: Matrix2fc, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number[]): number[];
    get(arg0: number[], arg1: number): number[];
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: number): number;
    get(arg0: Matrix2f): Matrix2f;
    get(arg0: Matrix3f): Matrix3f;
    get(arg0: Matrix3x2f): Matrix3x2f;
    getColumn(arg0: number, arg1: Vector2f): Vector2f;
    getRotation(): number;
    getRow(arg0: number, arg1: Vector2f): Vector2f;
    getScale(arg0: Vector2f): Vector2f;
    getToAddress(arg0: number): Matrix2fc;
    getTransposed(arg0: ByteBuffer): ByteBuffer;
    getTransposed(arg0: FloatBuffer): FloatBuffer;
    getTransposed(arg0: number, arg1: ByteBuffer): ByteBuffer;
    getTransposed(arg0: number, arg1: FloatBuffer): FloatBuffer;
    getTransposedToAddress(arg0: number): Matrix2fc;
    hashCode(): number;
    identity(): Matrix2f;
    invert(): Matrix2f;
    invert(arg0: Matrix2f): Matrix2f;
    isFinite(): boolean;
    lerp(arg0: Matrix2fc, arg1: number): Matrix2f;
    lerp(arg0: Matrix2fc, arg1: number, arg2: Matrix2f): Matrix2f;
    m00(): number;
    m00(arg0: number): Matrix2f;
    m01(): number;
    m01(arg0: number): Matrix2f;
    m10(): number;
    m10(arg0: number): Matrix2f;
    m11(): number;
    m11(arg0: number): Matrix2f;
    mul(arg0: Matrix2fc): Matrix2f;
    mul(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    mulComponentWise(arg0: Matrix2fc): Matrix2f;
    mulComponentWise(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    mulLocal(arg0: Matrix2fc): Matrix2f;
    mulLocal(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    normal(): Matrix2f;
    normal(arg0: Matrix2f): Matrix2f;
    normalizedPositiveX(arg0: Vector2f): Vector2f;
    normalizedPositiveY(arg0: Vector2f): Vector2f;
    positiveX(arg0: Vector2f): Vector2f;
    positiveY(arg0: Vector2f): Vector2f;
    readExternal(arg0: ObjectInput): void;
    rotate(arg0: number): Matrix2f;
    rotate(arg0: number, arg1: Matrix2f): Matrix2f;
    rotateLocal(arg0: number): Matrix2f;
    rotateLocal(arg0: number, arg1: Matrix2f): Matrix2f;
    rotation(arg0: number): Matrix2f;
    scale(arg0: number): Matrix2f;
    scale(arg0: number, arg1: number): Matrix2f;
    scale(arg0: number, arg1: number, arg2: Matrix2f): Matrix2f;
    scale(arg0: number, arg1: Matrix2f): Matrix2f;
    scale(arg0: Vector2fc): Matrix2f;
    scale(arg0: Vector2fc, arg1: Matrix2f): Matrix2f;
    scaleLocal(arg0: number, arg1: number): Matrix2f;
    scaleLocal(arg0: number, arg1: number, arg2: Matrix2f): Matrix2f;
    scaling(arg0: number): Matrix2f;
    scaling(arg0: number, arg1: number): Matrix2f;
    scaling(arg0: Vector2fc): Matrix2f;
    set(arg0: ByteBuffer): Matrix2f;
    set(arg0: FloatBuffer): Matrix2f;
    set(arg0: number, arg1: number, arg2: number, arg3: number): Matrix2f;
    set(arg0: number[]): Matrix2f;
    set(arg0: number[], arg1: number): Matrix2f;
    set(arg0: number, arg1: ByteBuffer): Matrix2f;
    set(arg0: number, arg1: FloatBuffer): Matrix2f;
    set(arg0: number, arg1: number, arg2: number): Matrix2f;
    set(arg0: Matrix2fc): Matrix2f;
    set(arg0: Matrix3fc): Matrix2f;
    set(arg0: Matrix3x2fc): Matrix2f;
    set(arg0: Vector2fc, arg1: Vector2fc): Matrix2f;
    setColumn(arg0: number, arg1: number, arg2: number): Matrix2f;
    setColumn(arg0: number, arg1: Vector2fc): Matrix2f;
    setFromAddress(arg0: number): Matrix2f;
    // private setMatrix2fc(arg0: Matrix2fc): void;
    setRow(arg0: number, arg1: number, arg2: number): Matrix2f;
    setRow(arg0: number, arg1: Vector2fc): Matrix2f;
    setTransposedFromAddress(arg0: number): Matrix2f;
    sub(arg0: Matrix2fc): Matrix2f;
    sub(arg0: Matrix2fc, arg1: Matrix2f): Matrix2f;
    swap(arg0: Matrix2f): Matrix2f;
    toString(): string;
    toString(arg0: NumberFormat): string;
    transform(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    transform(arg0: Vector2f): Vector2f;
    transform(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    transformTranspose(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    transformTranspose(arg0: Vector2f): Vector2f;
    transformTranspose(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    transpose(): Matrix2f;
    transpose(arg0: Matrix2f): Matrix2f;
    writeExternal(arg0: ObjectOutput): void;
    zero(): Matrix2f;
}