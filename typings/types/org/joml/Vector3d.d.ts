import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export class Vector3d extends Object implements Externalizable, Cloneable, Vector3dc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static length(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: DoubleBuffer)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number[])
    constructor(arg0: number[])
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: DoubleBuffer)
    constructor(arg0: Vector2dc, arg1: number)
    constructor(arg0: Vector2fc, arg1: number)
    constructor(arg0: Vector2ic, arg1: number)
    constructor(arg0: Vector3dc)
    constructor(arg0: Vector3fc)
    constructor(arg0: Vector3ic)
    x: number;
    y: number;
    z: number;
    absolute(): Vector3d;
    absolute(arg0: Vector3d): Vector3d;
    add(arg0: number, arg1: number, arg2: number): Vector3d;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    add(arg0: Vector3dc): Vector3d;
    add(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    add(arg0: Vector3fc): Vector3d;
    add(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    angle(arg0: Vector3dc): number;
    angleCos(arg0: Vector3dc): number;
    angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    angleSigned(arg0: Vector3dc, arg1: Vector3dc): number;
    ceil(): Vector3d;
    ceil(arg0: Vector3d): Vector3d;
    clone(): Object;
    cross(arg0: number, arg1: number, arg2: number): Vector3d;
    cross(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    cross(arg0: Vector3dc): Vector3d;
    cross(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3dc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3dc): number;
    div(arg0: number): Vector3d;
    div(arg0: number, arg1: number, arg2: number): Vector3d;
    div(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    div(arg0: number, arg1: Vector3d): Vector3d;
    div(arg0: Vector3dc): Vector3d;
    div(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    div(arg0: Vector3fc): Vector3d;
    div(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    dot(arg0: number, arg1: number, arg2: number): number;
    dot(arg0: Vector3dc): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    equals(arg0: Vector3dc, arg1: number): boolean;
    floor(): Vector3d;
    floor(arg0: Vector3d): Vector3d;
    fma(arg0: number, arg1: Vector3dc): Vector3d;
    fma(arg0: number, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    fma(arg0: number, arg1: Vector3fc): Vector3d;
    fma(arg0: number, arg1: Vector3fc, arg2: Vector3d): Vector3d;
    fma(arg0: Vector3dc, arg1: Vector3dc): Vector3d;
    fma(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    fma(arg0: Vector3dc, arg1: Vector3fc, arg2: Vector3d): Vector3d;
    fma(arg0: Vector3fc, arg1: Vector3fc): Vector3d;
    fma(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3d): Vector3d;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector3i): Vector3i;
    get(arg0: Vector3d): Vector3d;
    get(arg0: Vector3f): Vector3f;
    getToAddress(arg0: number): Vector3dc;
    getf(arg0: ByteBuffer): ByteBuffer;
    getf(arg0: number, arg1: ByteBuffer): ByteBuffer;
    half(arg0: number, arg1: number, arg2: number): Vector3d;
    half(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    half(arg0: Vector3dc): Vector3d;
    half(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    hashCode(): number;
    hermite(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3dc, arg3: number, arg4: Vector3d): Vector3d;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector3dc, arg1: number): Vector3d;
    lerp(arg0: Vector3dc, arg1: number, arg2: Vector3d): Vector3d;
    max(arg0: Vector3dc): Vector3d;
    max(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    maxComponent(): number;
    min(arg0: Vector3dc): Vector3d;
    min(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    minComponent(): number;
    mul(arg0: number): Vector3d;
    mul(arg0: number, arg1: number, arg2: number): Vector3d;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    mul(arg0: number, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3dc): Vector3d;
    mul(arg0: Matrix3dc, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3dc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3fc): Vector3d;
    mul(arg0: Matrix3fc, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3x2dc): Vector3d;
    mul(arg0: Matrix3x2dc, arg1: Vector3d): Vector3d;
    mul(arg0: Matrix3x2fc): Vector3d;
    mul(arg0: Matrix3x2fc, arg1: Vector3d): Vector3d;
    mul(arg0: Vector3dc): Vector3d;
    mul(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    mul(arg0: Vector3fc): Vector3d;
    mul(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    mulAdd(arg0: number, arg1: Vector3dc): Vector3d;
    mulAdd(arg0: number, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    mulAdd(arg0: Vector3dc, arg1: Vector3dc): Vector3d;
    mulAdd(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    mulAdd(arg0: Vector3fc, arg1: Vector3dc, arg2: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4dc): Vector3d;
    mulDirection(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4fc): Vector3d;
    mulDirection(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4x3dc): Vector3d;
    mulDirection(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulDirection(arg0: Matrix4x3fc): Vector3d;
    mulDirection(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4dc): Vector3d;
    mulPosition(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4fc): Vector3d;
    mulPosition(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4x3dc): Vector3d;
    mulPosition(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulPosition(arg0: Matrix4x3fc): Vector3d;
    mulPosition(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4dc): Vector3d;
    mulPositionGeneric(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4fc): Vector3d;
    mulPositionGeneric(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4x3dc): Vector3d;
    mulPositionGeneric(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulPositionGeneric(arg0: Matrix4x3fc): Vector3d;
    mulPositionGeneric(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4dc): Vector3d;
    mulPositionTranslation(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4fc): Vector3d;
    mulPositionTranslation(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4x3dc): Vector3d;
    mulPositionTranslation(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d;
    mulPositionTranslation(arg0: Matrix4x3fc): Vector3d;
    mulPositionTranslation(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d;
    mulPositionW(arg0: Matrix4dc): number;
    mulPositionW(arg0: Matrix4dc, arg1: Vector3d): number;
    mulPositionW(arg0: Matrix4fc): number;
    mulPositionW(arg0: Matrix4fc, arg1: Vector3d): number;
    mulProject(arg0: Matrix4dc): Vector3d;
    mulProject(arg0: Matrix4dc, arg1: number, arg2: Vector3d): Vector3d;
    mulProject(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProject(arg0: Matrix4fc): Vector3d;
    mulProject(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulProjectAffine(arg0: Matrix4dc): Vector3d;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectAffine(arg0: Matrix4fc): Vector3d;
    mulProjectAffine(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulProjectGeneric(arg0: Matrix4dc): Vector3d;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectGeneric(arg0: Matrix4fc): Vector3d;
    mulProjectGeneric(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulProjectTranslation(arg0: Matrix4dc): Vector3d;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectTranslation(arg0: Matrix4fc): Vector3d;
    mulProjectTranslation(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulTranspose(arg0: Matrix3dc): Vector3d;
    mulTranspose(arg0: Matrix3dc, arg1: Vector3d): Vector3d;
    mulTranspose(arg0: Matrix3fc): Vector3d;
    mulTranspose(arg0: Matrix3fc, arg1: Vector3d): Vector3d;
    mulTransposeDirection(arg0: Matrix4dc): Vector3d;
    mulTransposeDirection(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulTransposeDirection(arg0: Matrix4fc): Vector3d;
    mulTransposeDirection(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    mulTransposePosition(arg0: Matrix4dc): Vector3d;
    mulTransposePosition(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulTransposePosition(arg0: Matrix4fc): Vector3d;
    mulTransposePosition(arg0: Matrix4fc, arg1: Vector3d): Vector3d;
    negate(): Vector3d;
    negate(arg0: Vector3d): Vector3d;
    normalize(): Vector3d;
    normalize(arg0: number): Vector3d;
    normalize(arg0: number, arg1: Vector3d): Vector3d;
    normalize(arg0: Vector3d): Vector3d;
    orthogonalize(arg0: Vector3dc): Vector3d;
    orthogonalize(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    orthogonalizeUnit(arg0: Vector3dc): Vector3d;
    orthogonalizeUnit(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    readExternal(arg0: ObjectInput): void;
    reflect(arg0: number, arg1: number, arg2: number): Vector3d;
    reflect(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    reflect(arg0: Vector3dc): Vector3d;
    reflect(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    rotate(arg0: Quaterniondc): Vector3d;
    rotate(arg0: Quaterniondc, arg1: Vector3d): Vector3d;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): Vector3d;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3d): Vector3d;
    // private rotateAxisInternal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3d): Vector3d;
    rotateX(arg0: number): Vector3d;
    rotateX(arg0: number, arg1: Vector3d): Vector3d;
    rotateY(arg0: number): Vector3d;
    rotateY(arg0: number, arg1: Vector3d): Vector3d;
    rotateZ(arg0: number): Vector3d;
    rotateZ(arg0: number, arg1: Vector3d): Vector3d;
    rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaterniond): Quaterniond;
    rotationTo(arg0: Vector3dc, arg1: Quaterniond): Quaterniond;
    round(): Vector3d;
    round(arg0: Vector3d): Vector3d;
    set(arg0: ByteBuffer): Vector3d;
    set(arg0: DoubleBuffer): Vector3d;
    set(arg0: number): Vector3d;
    set(arg0: number, arg1: number, arg2: number): Vector3d;
    set(arg0: number[]): Vector3d;
    set(arg0: number, arg1: ByteBuffer): Vector3d;
    set(arg0: number, arg1: DoubleBuffer): Vector3d;
    set(arg0: Vector2dc, arg1: number): Vector3d;
    set(arg0: Vector2fc, arg1: number): Vector3d;
    set(arg0: Vector2ic, arg1: number): Vector3d;
    set(arg0: Vector3dc): Vector3d;
    set(arg0: Vector3fc): Vector3d;
    set(arg0: Vector3ic): Vector3d;
    set(arg0: Vector4dc): Vector3d;
    set(arg0: Vector4fc): Vector3d;
    set(arg0: Vector4ic): Vector3d;
    setComponent(arg0: number, arg1: number): Vector3d;
    setFromAddress(arg0: number): Vector3d;
    smoothStep(arg0: Vector3dc, arg1: number, arg2: Vector3d): Vector3d;
    sub(arg0: number, arg1: number, arg2: number): Vector3d;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d;
    sub(arg0: Vector3dc): Vector3d;
    sub(arg0: Vector3dc, arg1: Vector3d): Vector3d;
    sub(arg0: Vector3fc): Vector3d;
    sub(arg0: Vector3fc, arg1: Vector3d): Vector3d;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    xy(arg0: Vector2d): Vector2d;
    xy(arg0: Vector2f): Vector2f;
    zero(): Vector3d;
}