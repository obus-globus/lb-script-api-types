import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
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
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export class Vector3f extends Object implements Externalizable, Cloneable, Vector3fc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static length(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: FloatBuffer)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number[])
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: FloatBuffer)
    constructor(arg0: Vector2fc, arg1: number)
    constructor(arg0: Vector2ic, arg1: number)
    constructor(arg0: Vector3dc)
    constructor(arg0: Vector3fc)
    constructor(arg0: Vector3ic)
    x: number;
    y: number;
    z: number;
    absolute(): Vector3f;
    absolute(arg0: Vector3f): Vector3f;
    add(arg0: number, arg1: number, arg2: number): Vector3f;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    add(arg0: Vector3fc): Vector3f;
    add(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    angle(arg0: Vector3fc): number;
    angleCos(arg0: Vector3fc): number;
    angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    angleSigned(arg0: Vector3fc, arg1: Vector3fc): number;
    ceil(): Vector3f;
    ceil(arg0: Vector3f): Vector3f;
    protected clone(): Object;
    clone(): Object;
    cross(arg0: number, arg1: number, arg2: number): Vector3f;
    cross(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    cross(arg0: Vector3fc): Vector3f;
    cross(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3fc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3fc): number;
    div(arg0: number): Vector3f;
    div(arg0: number, arg1: number, arg2: number): Vector3f;
    div(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    div(arg0: number, arg1: Vector3f): Vector3f;
    div(arg0: Vector3fc): Vector3f;
    div(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    dot(arg0: number, arg1: number, arg2: number): number;
    dot(arg0: Vector3fc): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    equals(arg0: Vector3fc, arg1: number): boolean;
    floor(): Vector3f;
    floor(arg0: Vector3f): Vector3f;
    fma(arg0: number, arg1: Vector3fc): Vector3f;
    fma(arg0: number, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    fma(arg0: Vector3fc, arg1: Vector3fc): Vector3f;
    fma(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector3i): Vector3i;
    get(arg0: Vector3d): Vector3d;
    get(arg0: Vector3f): Vector3f;
    getToAddress(arg0: number): Vector3fc;
    half(arg0: number, arg1: number, arg2: number): Vector3f;
    half(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    half(arg0: Vector3fc): Vector3f;
    half(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    hashCode(): number;
    hermite(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3fc, arg3: number, arg4: Vector3f): Vector3f;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector3fc, arg1: number): Vector3f;
    lerp(arg0: Vector3fc, arg1: number, arg2: Vector3f): Vector3f;
    max(arg0: Vector3fc): Vector3f;
    max(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    maxComponent(): number;
    min(arg0: Vector3fc): Vector3f;
    min(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    minComponent(): number;
    mul(arg0: number): Vector3f;
    mul(arg0: number, arg1: number, arg2: number): Vector3f;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    mul(arg0: number, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3dc): Vector3f;
    mul(arg0: Matrix3dc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3fc): Vector3f;
    mul(arg0: Matrix3fc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3x2dc): Vector3f;
    mul(arg0: Matrix3x2dc, arg1: Vector3f): Vector3f;
    mul(arg0: Matrix3x2fc): Vector3f;
    mul(arg0: Matrix3x2fc, arg1: Vector3f): Vector3f;
    mul(arg0: Vector3fc): Vector3f;
    mul(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    mulAdd(arg0: number, arg1: Vector3fc): Vector3f;
    mulAdd(arg0: number, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    mulAdd(arg0: Vector3fc, arg1: Vector3fc): Vector3f;
    mulAdd(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4dc): Vector3f;
    mulDirection(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4fc): Vector3f;
    mulDirection(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4x3dc): Vector3f;
    mulDirection(arg0: Matrix4x3dc, arg1: Vector3f): Vector3f;
    mulDirection(arg0: Matrix4x3fc): Vector3f;
    mulDirection(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4dc): Vector3f;
    mulPosition(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4fc): Vector3f;
    mulPosition(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4x3dc): Vector3f;
    mulPosition(arg0: Matrix4x3dc, arg1: Vector3f): Vector3f;
    mulPosition(arg0: Matrix4x3fc): Vector3f;
    mulPosition(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f;
    mulPositionGeneric(arg0: Matrix4dc): Vector3f;
    mulPositionGeneric(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulPositionGeneric(arg0: Matrix4fc): Vector3f;
    mulPositionGeneric(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulPositionGeneric(arg0: Matrix4x3dc): Vector3f;
    mulPositionGeneric(arg0: Matrix4x3dc, arg1: Vector3f): Vector3f;
    mulPositionGeneric(arg0: Matrix4x3fc): Vector3f;
    mulPositionGeneric(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4dc): Vector3f;
    mulPositionTranslation(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4fc): Vector3f;
    mulPositionTranslation(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4x3dc): Vector3f;
    mulPositionTranslation(arg0: Matrix4x3dc, arg1: Vector3f): Vector3f;
    mulPositionTranslation(arg0: Matrix4x3fc): Vector3f;
    mulPositionTranslation(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f;
    mulPositionW(arg0: Matrix4dc): number;
    mulPositionW(arg0: Matrix4dc, arg1: Vector3f): number;
    mulPositionW(arg0: Matrix4fc): number;
    mulPositionW(arg0: Matrix4fc, arg1: Vector3f): number;
    mulProject(arg0: Matrix4fc): Vector3f;
    mulProject(arg0: Matrix4fc, arg1: number, arg2: Vector3f): Vector3f;
    mulProject(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectAffine(arg0: Matrix4dc): Vector3f;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulProjectAffine(arg0: Matrix4fc): Vector3f;
    mulProjectAffine(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectGeneric(arg0: Matrix4dc): Vector3f;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulProjectGeneric(arg0: Matrix4fc): Vector3f;
    mulProjectGeneric(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectTranslation(arg0: Matrix4dc): Vector3f;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulProjectTranslation(arg0: Matrix4fc): Vector3f;
    mulProjectTranslation(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulTranspose(arg0: Matrix3fc): Vector3f;
    mulTranspose(arg0: Matrix3fc, arg1: Vector3f): Vector3f;
    mulTransposeDirection(arg0: Matrix4fc): Vector3f;
    mulTransposeDirection(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulTransposePosition(arg0: Matrix4dc): Vector3f;
    mulTransposePosition(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulTransposePosition(arg0: Matrix4fc): Vector3f;
    mulTransposePosition(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulTransposePositionGeneric(arg0: Matrix4dc): Vector3f;
    mulTransposePositionGeneric(arg0: Matrix4dc, arg1: Vector3f): Vector3f;
    mulTransposePositionGeneric(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    negate(): Vector3f;
    negate(arg0: Vector3f): Vector3f;
    normalize(): Vector3f;
    normalize(arg0: number): Vector3f;
    normalize(arg0: number, arg1: Vector3f): Vector3f;
    normalize(arg0: Vector3f): Vector3f;
    orthogonalize(arg0: Vector3fc): Vector3f;
    orthogonalize(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    orthogonalizeUnit(arg0: Vector3fc): Vector3f;
    orthogonalizeUnit(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    readExternal(arg0: ObjectInput): void;
    reflect(arg0: number, arg1: number, arg2: number): Vector3f;
    reflect(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    reflect(arg0: Vector3fc): Vector3f;
    reflect(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    rotate(arg0: Quaternionfc): Vector3f;
    rotate(arg0: Quaternionfc, arg1: Vector3f): Vector3f;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): Vector3f;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3f): Vector3f;
    // private rotateAxisInternal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3f): Vector3f;
    rotateX(arg0: number): Vector3f;
    rotateX(arg0: number, arg1: Vector3f): Vector3f;
    rotateY(arg0: number): Vector3f;
    rotateY(arg0: number, arg1: Vector3f): Vector3f;
    rotateZ(arg0: number): Vector3f;
    rotateZ(arg0: number, arg1: Vector3f): Vector3f;
    rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf;
    rotationTo(arg0: Vector3fc, arg1: Quaternionf): Quaternionf;
    round(): Vector3f;
    round(arg0: Vector3f): Vector3f;
    set(arg0: ByteBuffer): Vector3f;
    set(arg0: FloatBuffer): Vector3f;
    set(arg0: number): Vector3f;
    set(arg0: number, arg1: number, arg2: number): Vector3f;
    set(arg0: number[]): Vector3f;
    set(arg0: number, arg1: ByteBuffer): Vector3f;
    set(arg0: number, arg1: FloatBuffer): Vector3f;
    set(arg0: Vector2dc, arg1: number): Vector3f;
    set(arg0: Vector2fc, arg1: number): Vector3f;
    set(arg0: Vector2ic, arg1: number): Vector3f;
    set(arg0: Vector3dc): Vector3f;
    set(arg0: Vector3fc): Vector3f;
    set(arg0: Vector3ic): Vector3f;
    set(arg0: Vector4dc): Vector3f;
    set(arg0: Vector4fc): Vector3f;
    set(arg0: Vector4ic): Vector3f;
    setComponent(arg0: number, arg1: number): Vector3f;
    setFromAddress(arg0: number): Vector3f;
    smoothStep(arg0: Vector3fc, arg1: number, arg2: Vector3f): Vector3f;
    sub(arg0: number, arg1: number, arg2: number): Vector3f;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f;
    sub(arg0: Vector3fc): Vector3f;
    sub(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    xy(arg0: Vector2d): Vector2d;
    xy(arg0: Vector2f): Vector2f;
    zero(): Vector3f;
}