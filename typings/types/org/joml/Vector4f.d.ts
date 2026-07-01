import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export class Vector4f extends Object implements Externalizable, Cloneable, Vector4fc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static length(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: FloatBuffer)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number[])
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: FloatBuffer)
    constructor(arg0: Vector2fc, arg1: number, arg2: number)
    constructor(arg0: Vector2ic, arg1: number, arg2: number)
    constructor(arg0: Vector3fc, arg1: number)
    constructor(arg0: Vector3ic, arg1: number)
    constructor(arg0: Vector4dc)
    constructor(arg0: Vector4fc)
    constructor(arg0: Vector4ic)
    w: number;
    x: number;
    y: number;
    z: number;
    absolute(): Vector4f;
    absolute(arg0: Vector4f): Vector4f;
    add(arg0: number, arg1: number, arg2: number, arg3: number): Vector4f;
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4f): Vector4f;
    add(arg0: Vector4fc): Vector4f;
    add(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    angle(arg0: Vector4fc): number;
    angleCos(arg0: Vector4fc): number;
    ceil(): Vector4f;
    ceil(arg0: Vector4f): Vector4f;
    clone(): Object;
    distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distance(arg0: Vector4fc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distanceSquared(arg0: Vector4fc): number;
    div(arg0: number): Vector4f;
    div(arg0: number, arg1: number, arg2: number, arg3: number): Vector4f;
    div(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4f): Vector4f;
    div(arg0: number, arg1: Vector4f): Vector4f;
    div(arg0: Vector4fc): Vector4f;
    div(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
    dot(arg0: Vector4fc): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    equals(arg0: Vector4fc, arg1: number): boolean;
    floor(): Vector4f;
    floor(arg0: Vector4f): Vector4f;
    fma(arg0: number, arg1: Vector4fc): Vector4f;
    fma(arg0: number, arg1: Vector4fc, arg2: Vector4f): Vector4f;
    fma(arg0: Vector4fc, arg1: Vector4fc): Vector4f;
    fma(arg0: Vector4fc, arg1: Vector4fc, arg2: Vector4f): Vector4f;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: FloatBuffer): FloatBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: FloatBuffer): FloatBuffer;
    get(arg0: number, arg1: Vector4i): Vector4i;
    get(arg0: Vector4d): Vector4d;
    get(arg0: Vector4f): Vector4f;
    getToAddress(arg0: number): Vector4fc;
    hashCode(): number;
    hermite(arg0: Vector4fc, arg1: Vector4fc, arg2: Vector4fc, arg3: number, arg4: Vector4f): Vector4f;
    isFinite(): boolean;
    length(): number;
    lengthSquared(): number;
    lerp(arg0: Vector4fc, arg1: number): Vector4f;
    lerp(arg0: Vector4fc, arg1: number, arg2: Vector4f): Vector4f;
    max(arg0: Vector4fc): Vector4f;
    max(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    maxComponent(): number;
    min(arg0: Vector4fc): Vector4f;
    min(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    minComponent(): number;
    mul(arg0: number): Vector4f;
    mul(arg0: number, arg1: number, arg2: number, arg3: number): Vector4f;
    mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4f): Vector4f;
    mul(arg0: number, arg1: Vector4f): Vector4f;
    mul(arg0: Matrix4fc): Vector4f;
    mul(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mul(arg0: Matrix4x3fc): Vector4f;
    mul(arg0: Matrix4x3fc, arg1: Vector4f): Vector4f;
    mul(arg0: Vector4fc): Vector4f;
    mul(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    mulAdd(arg0: number, arg1: Vector4fc): Vector4f;
    mulAdd(arg0: number, arg1: Vector4fc, arg2: Vector4f): Vector4f;
    mulAdd(arg0: Vector4fc, arg1: Vector4fc): Vector4f;
    mulAdd(arg0: Vector4fc, arg1: Vector4fc, arg2: Vector4f): Vector4f;
    mulAffine(arg0: Matrix4fc): Vector4f;
    mulAffine(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulAffineTranspose(arg0: Matrix4fc): Vector4f;
    mulAffineTranspose(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulGeneric(arg0: Matrix4fc): Vector4f;
    mulGeneric(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulGeneric(arg0: Matrix4x3fc): Vector4f;
    mulGeneric(arg0: Matrix4x3fc, arg1: Vector4f): Vector4f;
    mulGenericTranspose(arg0: Matrix4fc): Vector4f;
    mulGenericTranspose(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulProject(arg0: Matrix4fc): Vector4f;
    mulProject(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProject(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulProjectAffine(arg0: Matrix4fc): Vector4f;
    mulProjectAffine(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectAffine(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulProjectGeneric(arg0: Matrix4fc): Vector4f;
    mulProjectGeneric(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectGeneric(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulProjectTranslation(arg0: Matrix4fc): Vector4f;
    mulProjectTranslation(arg0: Matrix4fc, arg1: Vector3f): Vector3f;
    mulProjectTranslation(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulTranslation(arg0: Matrix4fc): Vector4f;
    mulTranslation(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    mulTranslation(arg0: Matrix4x3fc): Vector4f;
    mulTranslation(arg0: Matrix4x3fc, arg1: Vector4f): Vector4f;
    mulTranspose(arg0: Matrix4fc): Vector4f;
    mulTranspose(arg0: Matrix4fc, arg1: Vector4f): Vector4f;
    negate(): Vector4f;
    negate(arg0: Vector4f): Vector4f;
    normalize(): Vector4f;
    normalize(arg0: number): Vector4f;
    normalize(arg0: number, arg1: Vector4f): Vector4f;
    normalize(arg0: Vector4f): Vector4f;
    normalize3(): Vector4f;
    normalize3(arg0: Vector4f): Vector4f;
    readExternal(arg0: ObjectInput): void;
    rotate(arg0: Quaternionfc): Vector4f;
    rotate(arg0: Quaternionfc, arg1: Vector4f): Vector4f;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): Vector4f;
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4f): Vector4f;
    // private rotateAxisInternal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4f): Vector4f;
    rotateX(arg0: number): Vector4f;
    rotateX(arg0: number, arg1: Vector4f): Vector4f;
    rotateY(arg0: number): Vector4f;
    rotateY(arg0: number, arg1: Vector4f): Vector4f;
    rotateZ(arg0: number): Vector4f;
    rotateZ(arg0: number, arg1: Vector4f): Vector4f;
    round(): Vector4f;
    round(arg0: Vector4f): Vector4f;
    set(arg0: ByteBuffer): Vector4f;
    set(arg0: FloatBuffer): Vector4f;
    set(arg0: number): Vector4f;
    set(arg0: number, arg1: number, arg2: number, arg3: number): Vector4f;
    set(arg0: number, arg1: number, arg2: number): Vector4f;
    set(arg0: number[]): Vector4f;
    set(arg0: number, arg1: ByteBuffer): Vector4f;
    set(arg0: number, arg1: FloatBuffer): Vector4f;
    set(arg0: Vector2fc, arg1: number, arg2: number): Vector4f;
    set(arg0: Vector2ic, arg1: number, arg2: number): Vector4f;
    set(arg0: Vector3dc): Vector4f;
    set(arg0: Vector3fc, arg1: number): Vector4f;
    set(arg0: Vector3ic, arg1: number): Vector4f;
    set(arg0: Vector4dc): Vector4f;
    set(arg0: Vector4fc): Vector4f;
    set(arg0: Vector4ic): Vector4f;
    setComponent(arg0: number, arg1: number): Vector4f;
    setFromAddress(arg0: number): Vector4f;
    smoothStep(arg0: Vector4fc, arg1: number, arg2: Vector4f): Vector4f;
    sub(arg0: number, arg1: number, arg2: number, arg3: number): Vector4f;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4f): Vector4f;
    sub(arg0: Vector4fc): Vector4f;
    sub(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    xy(arg0: Vector2d): Vector2d;
    xy(arg0: Vector2f): Vector2f;
    xyz(arg0: Vector3d): Vector3d;
    xyz(arg0: Vector3f): Vector3f;
    zero(): Vector4f;
}