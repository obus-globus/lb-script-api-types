import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Vector2L } from '../../org/joml/Vector2L.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3Lc } from '../../org/joml/Vector3Lc.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class Vector3L extends Object implements Externalizable, Cloneable, Vector3Lc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static length(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: LongBuffer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: LongBuffer)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number[])
    constructor(arg0: Vector2dc, arg1: number, arg2: number)
    constructor(arg0: Vector2fc, arg1: number, arg2: number)
    constructor(arg0: Vector2ic, arg1: number)
    constructor(arg0: Vector3Lc)
    constructor(arg0: Vector3dc, arg1: number)
    constructor(arg0: Vector3fc, arg1: number)
    x: number;
    y: number;
    z: number;
    absolute(): Vector3L;
    absolute(arg0: Vector3L): Vector3L;
    add(arg0: number, arg1: number, arg2: number): Vector3L;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3L): Vector3L;
    add(arg0: Vector3Lc): Vector3L;
    add(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    protected clone(): Object;
    clone(): Object;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3Lc): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3Lc): number;
    div(arg0: number): Vector3L;
    div(arg0: number, arg1: Vector3L): Vector3L;
    div(arg0: number): Vector3L;
    div(arg0: number, arg1: Vector3L): Vector3L;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: LongBuffer): LongBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: LongBuffer): LongBuffer;
    getToAddress(arg0: number): Vector3Lc;
    gridDistance(arg0: number, arg1: number, arg2: number): number;
    gridDistance(arg0: Vector3Lc): number;
    hashCode(): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector3Lc): Vector3L;
    max(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    maxComponent(): number;
    min(arg0: Vector3Lc): Vector3L;
    min(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    minComponent(): number;
    mul(arg0: number): Vector3L;
    mul(arg0: number, arg1: number, arg2: number): Vector3L;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3L): Vector3L;
    mul(arg0: number, arg1: Vector3L): Vector3L;
    mul(arg0: Vector3Lc): Vector3L;
    mul(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    negate(): Vector3L;
    negate(arg0: Vector3L): Vector3L;
    readExternal(arg0: ObjectInput): void;
    set(arg0: ByteBuffer): Vector3L;
    set(arg0: LongBuffer): Vector3L;
    set(arg0: number, arg1: ByteBuffer): Vector3L;
    set(arg0: number, arg1: LongBuffer): Vector3L;
    set(arg0: number): Vector3L;
    set(arg0: number, arg1: number, arg2: number): Vector3L;
    set(arg0: number[]): Vector3L;
    set(arg0: Vector2ic, arg1: number): Vector3L;
    set(arg0: Vector3Lc): Vector3L;
    set(arg0: Vector3dc): Vector3L;
    set(arg0: Vector3dc, arg1: number): Vector3L;
    set(arg0: Vector3fc, arg1: number): Vector3L;
    setComponent(arg0: number, arg1: number): Vector3L;
    setFromAddress(arg0: number): Vector3L;
    sub(arg0: number, arg1: number, arg2: number): Vector3L;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3L): Vector3L;
    sub(arg0: Vector3Lc): Vector3L;
    sub(arg0: Vector3Lc, arg1: Vector3L): Vector3L;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    x(): number;
    xy(arg0: Vector2L): Vector2L;
    xy(arg0: Vector2d): Vector2d;
    xy(arg0: Vector2f): Vector2f;
    y(): number;
    z(): number;
    zero(): Vector3L;
}