import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export class Vector4d extends Object implements Externalizable, Cloneable, Vector4dc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static length(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: DoubleBuffer)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number[])
    constructor(arg0: number[])
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: DoubleBuffer)
    constructor(arg0: Vector2dc, arg1: number, arg2: number)
    constructor(arg0: Vector2fc, arg1: number, arg2: number)
    constructor(arg0: Vector2ic, arg1: number, arg2: number)
    constructor(arg0: Vector3dc, arg1: number)
    constructor(arg0: Vector3fc, arg1: number)
    constructor(arg0: Vector3ic, arg1: number)
    constructor(arg0: Vector4dc)
    constructor(arg0: Vector4fc)
    constructor(arg0: Vector4ic)
    w: number;
    x: number;
    y: number;
    z: number;
    absolute(): Vector4d;
    absolute(arg0: Vector4d): Vector4d;
    add(arg0: number, arg1: number, arg2: number, arg3: number): Vector4d;
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4d): Vector4d;
    add(arg0: Vector4dc): Vector4d;
    add(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    add(arg0: Vector4fc): Vector4d;
    add(arg0: Vector4fc, arg1: Vector4d): Vector4d;
    angle(arg0: Vector4dc): number;
    angleCos(arg0: Vector4dc): number;
    ceil(): Vector4d;
    ceil(arg0: Vector4d): Vector4d;
    protected clone(): Object;
    clone(): Object;
    distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distance(arg0: Vector4dc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distanceSquared(arg0: Vector4dc): number;
    div(arg0: number): Vector4d;
    div(arg0: number, arg1: Vector4d): Vector4d;
    div(arg0: Vector4dc): Vector4d;
    div(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
    dot(arg0: Vector4dc): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    equals(arg0: Vector4dc, arg1: number): boolean;
    floor(): Vector4d;
    floor(arg0: Vector4d): Vector4d;
    fma(arg0: number, arg1: Vector4dc): Vector4d;
    fma(arg0: number, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    fma(arg0: Vector4dc, arg1: Vector4dc): Vector4d;
    fma(arg0: Vector4dc, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: DoubleBuffer): DoubleBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector4i): Vector4i;
    get(arg0: Vector4d): Vector4d;
    get(arg0: Vector4f): Vector4f;
    getToAddress(arg0: number): Vector4dc;
    getf(arg0: ByteBuffer): ByteBuffer;
    getf(arg0: number, arg1: ByteBuffer): ByteBuffer;
    hashCode(): number;
    hermite(arg0: Vector4dc, arg1: Vector4dc, arg2: Vector4dc, arg3: number, arg4: Vector4d): Vector4d;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector4dc, arg1: number): Vector4d;
    lerp(arg0: Vector4dc, arg1: number, arg2: Vector4d): Vector4d;
    max(arg0: Vector4dc): Vector4d;
    max(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    maxComponent(): number;
    min(arg0: Vector4dc): Vector4d;
    min(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    minComponent(): number;
    mul(arg0: number): Vector4d;
    mul(arg0: number, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4dc): Vector4d;
    mul(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4fc): Vector4d;
    mul(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4x3dc): Vector4d;
    mul(arg0: Matrix4x3dc, arg1: Vector4d): Vector4d;
    mul(arg0: Matrix4x3fc): Vector4d;
    mul(arg0: Matrix4x3fc, arg1: Vector4d): Vector4d;
    mul(arg0: Vector4dc): Vector4d;
    mul(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    mul(arg0: Vector4fc): Vector4d;
    mul(arg0: Vector4fc, arg1: Vector4d): Vector4d;
    mulAdd(arg0: number, arg1: Vector4dc): Vector4d;
    mulAdd(arg0: number, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    mulAdd(arg0: Vector4dc, arg1: Vector4dc): Vector4d;
    mulAdd(arg0: Vector4dc, arg1: Vector4dc, arg2: Vector4d): Vector4d;
    mulAffine(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulAffine(arg0: Matrix4fc): Vector4d;
    mulAffine(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mulAffineTranspose(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4dc): Vector4d;
    mulGeneric(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4fc): Vector4d;
    mulGeneric(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4x3dc, arg1: Vector4d): Vector4d;
    mulGeneric(arg0: Matrix4x3fc, arg1: Vector4d): Vector4d;
    mulGenericTranspose(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProject(arg0: Matrix4dc): Vector4d;
    mulProject(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProject(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProjectAffine(arg0: Matrix4dc): Vector4d;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectAffine(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProjectGeneric(arg0: Matrix4dc): Vector4d;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectGeneric(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulProjectTranslation(arg0: Matrix4dc): Vector4d;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector3d): Vector3d;
    mulProjectTranslation(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4fc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4x3dc, arg1: Vector4d): Vector4d;
    mulTranslation(arg0: Matrix4x3fc, arg1: Vector4d): Vector4d;
    mulTranspose(arg0: Matrix4dc): Vector4d;
    mulTranspose(arg0: Matrix4dc, arg1: Vector4d): Vector4d;
    negate(): Vector4d;
    negate(arg0: Vector4d): Vector4d;
    normalize(): Vector4d;
    normalize(arg0: number): Vector4d;
    normalize(arg0: number, arg1: Vector4d): Vector4d;
    normalize(arg0: Vector4d): Vector4d;
    normalize3(): Vector4d;
    normalize3(arg0: Vector4d): Vector4d;
    readExternal(arg0: ObjectInput): void;
    rotate(arg0: Quaterniondc): Vector4d;
    rotate(arg0: Quaterniondc, arg1: Vector4d): Vector4d;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): Vector4d;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4d): Vector4d;
    // private rotateAxisInternal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4d): Vector4d;
    rotateX(arg0: number): Vector4d;
    rotateX(arg0: number, arg1: Vector4d): Vector4d;
    rotateY(arg0: number): Vector4d;
    rotateY(arg0: number, arg1: Vector4d): Vector4d;
    rotateZ(arg0: number): Vector4d;
    rotateZ(arg0: number, arg1: Vector4d): Vector4d;
    round(): Vector4d;
    round(arg0: Vector4d): Vector4d;
    set(arg0: ByteBuffer): Vector4d;
    set(arg0: DoubleBuffer): Vector4d;
    set(arg0: number): Vector4d;
    set(arg0: number, arg1: number, arg2: number): Vector4d;
    set(arg0: number, arg1: number, arg2: number, arg3: number): Vector4d;
    set(arg0: number[]): Vector4d;
    set(arg0: number, arg1: ByteBuffer): Vector4d;
    set(arg0: number, arg1: DoubleBuffer): Vector4d;
    set(arg0: Vector2dc, arg1: number, arg2: number): Vector4d;
    set(arg0: Vector2fc, arg1: number, arg2: number): Vector4d;
    set(arg0: Vector2ic, arg1: number, arg2: number): Vector4d;
    set(arg0: Vector3dc, arg1: number): Vector4d;
    set(arg0: Vector3fc, arg1: number): Vector4d;
    set(arg0: Vector3ic, arg1: number): Vector4d;
    set(arg0: Vector4dc): Vector4d;
    set(arg0: Vector4fc): Vector4d;
    set(arg0: Vector4ic): Vector4d;
    setComponent(arg0: number, arg1: number): Vector4d;
    setFromAddress(arg0: number): Vector4d;
    smoothStep(arg0: Vector4dc, arg1: number, arg2: Vector4d): Vector4d;
    sub(arg0: number, arg1: number, arg2: number, arg3: number): Vector4d;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4d): Vector4d;
    sub(arg0: Vector4dc): Vector4d;
    sub(arg0: Vector4dc, arg1: Vector4d): Vector4d;
    sub(arg0: Vector4fc): Vector4d;
    sub(arg0: Vector4fc, arg1: Vector4d): Vector4d;
    toString(): string;
    toString(arg0: NumberFormat): string;
    w(): number;
    writeExternal(arg0: ObjectOutput): void;
    x(): number;
    xy(arg0: Vector2d): Vector2d;
    xy(arg0: Vector2f): Vector2f;
    xyz(arg0: Vector3d): Vector3d;
    xyz(arg0: Vector3f): Vector3f;
    y(): number;
    z(): number;
    zero(): Vector4d;
}