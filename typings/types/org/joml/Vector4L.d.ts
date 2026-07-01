import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Vector2L } from '../../org/joml/Vector2L.d.ts'
import type { Vector2Lc } from '../../org/joml/Vector2Lc.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3L } from '../../org/joml/Vector3L.d.ts'
import type { Vector3Lc } from '../../org/joml/Vector3Lc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
import type { Vector4Lc } from '../../org/joml/Vector4Lc.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
import type { Vector4ic } from '../../org/joml/Vector4ic.d.ts'
export class Vector4L extends Object implements Externalizable, Cloneable, Vector4Lc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): number;
    static length(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: LongBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: LongBuffer)
    constructor(arg0: number[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: Vector2Lc, arg1: number, arg2: number)
    constructor(arg0: Vector2ic, arg1: number, arg2: number)
    constructor(arg0: Vector3Lc, arg1: number)
    constructor(arg0: Vector3fc, arg1: number, arg2: number)
    constructor(arg0: Vector3ic, arg1: number)
    constructor(arg0: Vector4Lc)
    constructor(arg0: Vector4dc, arg1: number)
    constructor(arg0: Vector4fc, arg1: number)
    constructor(arg0: Vector4ic)
    w: number;
    x: number;
    y: number;
    z: number;
    absolute(): Vector4L;
    absolute(arg0: Vector4L): Vector4L;
    add(arg0: number, arg1: number, arg2: number, arg3: number): Vector4L;
    add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4L): Vector4L;
    add(arg0: Vector4Lc): Vector4L;
    add(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    add(arg0: Vector4ic): Vector4L;
    add(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    clone(): Object;
    distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distance(arg0: Vector4Lc): number;
    distance(arg0: Vector4ic): number;
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
    distanceSquared(arg0: Vector4Lc): number;
    distanceSquared(arg0: Vector4ic): number;
    div(arg0: number): Vector4L;
    div(arg0: number, arg1: Vector4L): Vector4L;
    div(arg0: Vector4Lc): Vector4L;
    div(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    div(arg0: Vector4ic): Vector4L;
    div(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    dot(arg0: Vector4Lc): number;
    dot(arg0: Vector4ic): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: LongBuffer): LongBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: LongBuffer): LongBuffer;
    getToAddress(arg0: number): Vector4Lc;
    gridDistance(arg0: number, arg1: number, arg2: number, arg3: number): number;
    gridDistance(arg0: Vector4Lc): number;
    gridDistance(arg0: Vector4ic): number;
    hashCode(): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector4Lc): Vector4L;
    max(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    maxComponent(): number;
    min(arg0: Vector4Lc): Vector4L;
    min(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    minComponent(): number;
    mul(arg0: number): Vector4L;
    mul(arg0: number, arg1: Vector4L): Vector4L;
    mul(arg0: Vector4Lc): Vector4L;
    mul(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    mul(arg0: Vector4ic): Vector4L;
    mul(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    negate(): Vector4L;
    negate(arg0: Vector4L): Vector4L;
    readExternal(arg0: ObjectInput): void;
    set(arg0: ByteBuffer): Vector4L;
    set(arg0: LongBuffer): Vector4L;
    set(arg0: number, arg1: ByteBuffer): Vector4L;
    set(arg0: number, arg1: LongBuffer): Vector4L;
    set(arg0: number[]): Vector4L;
    set(arg0: number): Vector4L;
    set(arg0: number, arg1: number, arg2: number, arg3: number): Vector4L;
    set(arg0: Vector2ic, arg1: number, arg2: number): Vector4L;
    set(arg0: Vector3ic, arg1: number): Vector4L;
    set(arg0: Vector4Lc): Vector4L;
    set(arg0: Vector4dc): Vector4L;
    set(arg0: Vector4dc, arg1: number): Vector4L;
    set(arg0: Vector4fc, arg1: number): Vector4L;
    set(arg0: Vector4ic): Vector4L;
    setComponent(arg0: number, arg1: number): Vector4L;
    setFromAddress(arg0: number): Vector4L;
    sub(arg0: number, arg1: number, arg2: number, arg3: number): Vector4L;
    sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector4L): Vector4L;
    sub(arg0: Vector4Lc): Vector4L;
    sub(arg0: Vector4Lc, arg1: Vector4L): Vector4L;
    sub(arg0: Vector4ic): Vector4L;
    sub(arg0: Vector4ic, arg1: Vector4L): Vector4L;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    xy(arg0: Vector2L): Vector2L;
    xy(arg0: Vector2d): Vector2d;
    xy(arg0: Vector2f): Vector2f;
    xyz(arg0: Vector3L): Vector3L;
    xyz(arg0: Vector3d): Vector3d;
    xyz(arg0: Vector3f): Vector3f;
    zero(): Vector4L;
}