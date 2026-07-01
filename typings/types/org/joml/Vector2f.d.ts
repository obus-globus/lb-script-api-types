import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
export class Vector2f extends Object implements Externalizable, Cloneable, Vector2fc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static length(paramarg0: number, paramarg1: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: FloatBuffer)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number[])
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: FloatBuffer)
    constructor(arg0: Vector2dc)
    constructor(arg0: Vector2fc)
    constructor(arg0: Vector2ic)
    constructor(arg0: Vector3dc)
    constructor(arg0: Vector3fc)
    constructor(arg0: Vector3ic)
    x: number;
    y: number;
    absolute(): Vector2f;
    absolute(arg0: Vector2f): Vector2f;
    add(arg0: number, arg1: number): Vector2f;
    add(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    add(arg0: Vector2fc): Vector2f;
    add(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    angle(arg0: Vector2fc): number;
    ceil(): Vector2f;
    ceil(arg0: Vector2f): Vector2f;
    clone(): Object;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2fc): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2fc): number;
    div(arg0: number): Vector2f;
    div(arg0: number, arg1: number): Vector2f;
    div(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    div(arg0: number, arg1: Vector2f): Vector2f;
    div(arg0: Vector2fc): Vector2f;
    div(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    dot(arg0: Vector2fc): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    equals(arg0: Vector2fc, arg1: number): boolean;
    floor(): Vector2f;
    floor(arg0: Vector2f): Vector2f;
    fma(arg0: number, arg1: Vector2fc): Vector2f;
    fma(arg0: number, arg1: Vector2fc, arg2: Vector2f): Vector2f;
    fma(arg0: Vector2fc, arg1: Vector2fc): Vector2f;
    fma(arg0: Vector2fc, arg1: Vector2fc, arg2: Vector2f): Vector2f;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector2i): Vector2i;
    get(arg0: Vector2d): Vector2d;
    get(arg0: Vector2f): Vector2f;
    getToAddress(arg0: number): Vector2fc;
    hashCode(): number;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector2fc, arg1: number): Vector2f;
    lerp(arg0: Vector2fc, arg1: number, arg2: Vector2f): Vector2f;
    max(arg0: Vector2fc): Vector2f;
    max(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    maxComponent(): number;
    min(arg0: Vector2fc): Vector2f;
    min(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    minComponent(): number;
    mul(arg0: number): Vector2f;
    mul(arg0: number, arg1: number): Vector2f;
    mul(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    mul(arg0: number, arg1: Vector2f): Vector2f;
    mul(arg0: Matrix2dc): Vector2f;
    mul(arg0: Matrix2dc, arg1: Vector2f): Vector2f;
    mul(arg0: Matrix2fc): Vector2f;
    mul(arg0: Matrix2fc, arg1: Vector2f): Vector2f;
    mul(arg0: Vector2fc): Vector2f;
    mul(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    mulDirection(arg0: Matrix3x2fc): Vector2f;
    mulDirection(arg0: Matrix3x2fc, arg1: Vector2f): Vector2f;
    mulPosition(arg0: Matrix3x2fc): Vector2f;
    mulPosition(arg0: Matrix3x2fc, arg1: Vector2f): Vector2f;
    mulTranspose(arg0: Matrix2fc): Vector2f;
    mulTranspose(arg0: Matrix2fc, arg1: Vector2f): Vector2f;
    negate(): Vector2f;
    negate(arg0: Vector2f): Vector2f;
    normalize(): Vector2f;
    normalize(arg0: number): Vector2f;
    normalize(arg0: number, arg1: Vector2f): Vector2f;
    normalize(arg0: Vector2f): Vector2f;
    perpendicular(): Vector2f;
    readExternal(arg0: ObjectInput): void;
    round(): Vector2f;
    round(arg0: Vector2f): Vector2f;
    set(arg0: ByteBuffer): Vector2f;
    set(arg0: FloatBuffer): Vector2f;
    set(arg0: number): Vector2f;
    set(arg0: number, arg1: number): Vector2f;
    set(arg0: number[]): Vector2f;
    set(arg0: number, arg1: ByteBuffer): Vector2f;
    set(arg0: number, arg1: FloatBuffer): Vector2f;
    set(arg0: Vector2dc): Vector2f;
    set(arg0: Vector2fc): Vector2f;
    set(arg0: Vector2ic): Vector2f;
    set(arg0: Vector3dc): Vector2f;
    set(arg0: Vector3fc): Vector2f;
    set(arg0: Vector3ic): Vector2f;
    setComponent(arg0: number, arg1: number): Vector2f;
    setFromAddress(arg0: number): Vector2f;
    sub(arg0: number, arg1: number): Vector2f;
    sub(arg0: number, arg1: number, arg2: Vector2f): Vector2f;
    sub(arg0: Vector2fc): Vector2f;
    sub(arg0: Vector2fc, arg1: Vector2f): Vector2f;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    zero(): Vector2f;
}