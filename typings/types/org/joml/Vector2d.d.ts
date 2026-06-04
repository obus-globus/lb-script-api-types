import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
export class Vector2d extends Object implements Externalizable, Cloneable, Vector2dc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static length(paramarg0: number, paramarg1: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: DoubleBuffer)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number[])
    constructor(arg0: number[])
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: DoubleBuffer)
    constructor(arg0: Vector2dc)
    constructor(arg0: Vector2fc)
    constructor(arg0: Vector2ic)
    constructor(arg0: Vector3dc)
    constructor(arg0: Vector3fc)
    constructor(arg0: Vector3ic)
    x: number;
    y: number;
    absolute(): Vector2d;
    absolute(arg0: Vector2d): Vector2d;
    add(arg0: number, arg1: number): Vector2d;
    add(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    add(arg0: Vector2dc): Vector2d;
    add(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    add(arg0: Vector2fc): Vector2d;
    add(arg0: Vector2fc, arg1: Vector2d): Vector2d;
    angle(arg0: Vector2dc): number;
    ceil(): Vector2d;
    ceil(arg0: Vector2d): Vector2d;
    protected clone(): Object;
    clone(): Object;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2dc): number;
    distance(arg0: Vector2fc): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2dc): number;
    distanceSquared(arg0: Vector2fc): number;
    div(arg0: number): Vector2d;
    div(arg0: number, arg1: number): Vector2d;
    div(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    div(arg0: number, arg1: Vector2d): Vector2d;
    div(arg0: Vector2dc): Vector2d;
    div(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    div(arg0: Vector2fc): Vector2d;
    div(arg0: Vector2fc, arg1: Vector2d): Vector2d;
    dot(arg0: Vector2dc): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    equals(arg0: Vector2dc, arg1: number): boolean;
    floor(): Vector2d;
    floor(arg0: Vector2d): Vector2d;
    fma(arg0: number, arg1: Vector2dc): Vector2d;
    fma(arg0: number, arg1: Vector2dc, arg2: Vector2d): Vector2d;
    fma(arg0: Vector2dc, arg1: Vector2dc): Vector2d;
    fma(arg0: Vector2dc, arg1: Vector2dc, arg2: Vector2d): Vector2d;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: Vector2i): Vector2i;
    get(arg0: Vector2d): Vector2d;
    get(arg0: Vector2f): Vector2f;
    getToAddress(arg0: number): Vector2dc;
    hashCode(): number;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector2dc, arg1: number): Vector2d;
    lerp(arg0: Vector2dc, arg1: number, arg2: Vector2d): Vector2d;
    max(arg0: Vector2dc): Vector2d;
    max(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    maxComponent(): number;
    min(arg0: Vector2dc): Vector2d;
    min(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    minComponent(): number;
    mul(arg0: number): Vector2d;
    mul(arg0: number, arg1: number): Vector2d;
    mul(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    mul(arg0: number, arg1: Vector2d): Vector2d;
    mul(arg0: Matrix2dc): Vector2d;
    mul(arg0: Matrix2dc, arg1: Vector2d): Vector2d;
    mul(arg0: Matrix2fc): Vector2d;
    mul(arg0: Matrix2fc, arg1: Vector2d): Vector2d;
    mul(arg0: Vector2dc): Vector2d;
    mul(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    mulDirection(arg0: Matrix3x2dc): Vector2d;
    mulDirection(arg0: Matrix3x2dc, arg1: Vector2d): Vector2d;
    mulPosition(arg0: Matrix3x2dc): Vector2d;
    mulPosition(arg0: Matrix3x2dc, arg1: Vector2d): Vector2d;
    mulTranspose(arg0: Matrix2dc): Vector2d;
    mulTranspose(arg0: Matrix2dc, arg1: Vector2d): Vector2d;
    mulTranspose(arg0: Matrix2fc): Vector2d;
    mulTranspose(arg0: Matrix2fc, arg1: Vector2d): Vector2d;
    negate(): Vector2d;
    negate(arg0: Vector2d): Vector2d;
    normalize(): Vector2d;
    normalize(arg0: number): Vector2d;
    normalize(arg0: number, arg1: Vector2d): Vector2d;
    normalize(arg0: Vector2d): Vector2d;
    perpendicular(): Vector2d;
    readExternal(arg0: ObjectInput): void;
    round(): Vector2d;
    round(arg0: Vector2d): Vector2d;
    set(arg0: ByteBuffer): Vector2d;
    set(arg0: DoubleBuffer): Vector2d;
    set(arg0: number): Vector2d;
    set(arg0: number, arg1: number): Vector2d;
    set(arg0: number[]): Vector2d;
    set(arg0: number, arg1: ByteBuffer): Vector2d;
    set(arg0: number, arg1: DoubleBuffer): Vector2d;
    set(arg0: Vector2dc): Vector2d;
    set(arg0: Vector2fc): Vector2d;
    set(arg0: Vector2ic): Vector2d;
    set(arg0: Vector3dc): Vector2d;
    set(arg0: Vector3fc): Vector2d;
    set(arg0: Vector3ic): Vector2d;
    setComponent(arg0: number, arg1: number): Vector2d;
    setFromAddress(arg0: number): Vector2d;
    sub(arg0: number, arg1: number): Vector2d;
    sub(arg0: number, arg1: number, arg2: Vector2d): Vector2d;
    sub(arg0: Vector2dc): Vector2d;
    sub(arg0: Vector2dc, arg1: Vector2d): Vector2d;
    sub(arg0: Vector2fc): Vector2d;
    sub(arg0: Vector2fc, arg1: Vector2d): Vector2d;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    x(): number;
    y(): number;
    zero(): Vector2d;
}