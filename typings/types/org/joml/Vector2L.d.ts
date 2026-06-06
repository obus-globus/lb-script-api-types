import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Vector2Lc } from '../../org/joml/Vector2Lc.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
export class Vector2L extends Object implements Externalizable, Cloneable, Vector2Lc {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static length(paramarg0: number, paramarg1: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: LongBuffer)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: LongBuffer)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number[])
    constructor(arg0: Vector2Lc)
    constructor(arg0: Vector2dc, arg1: number)
    constructor(arg0: Vector2fc, arg1: number)
    constructor(arg0: Vector2ic)
    x: number;
    y: number;
    absolute(): Vector2L;
    absolute(arg0: Vector2L): Vector2L;
    add(arg0: number, arg1: number): Vector2L;
    add(arg0: number, arg1: number, arg2: Vector2L): Vector2L;
    add(arg0: Vector2Lc): Vector2L;
    add(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    add(arg0: Vector2ic): Vector2L;
    add(arg0: Vector2ic, arg1: Vector2L): Vector2L;
    protected clone(): Object;
    clone(): Object;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2Lc): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2Lc): number;
    div(arg0: number): Vector2L;
    div(arg0: number, arg1: Vector2L): Vector2L;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: LongBuffer): LongBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: LongBuffer): LongBuffer;
    getToAddress(arg0: number): Vector2Lc;
    gridDistance(arg0: number, arg1: number): number;
    gridDistance(arg0: Vector2Lc): number;
    hashCode(): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector2Lc): Vector2L;
    max(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    maxComponent(): number;
    min(arg0: Vector2Lc): Vector2L;
    min(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    minComponent(): number;
    mul(arg0: number): Vector2L;
    mul(arg0: number, arg1: number): Vector2L;
    mul(arg0: number, arg1: number, arg2: Vector2L): Vector2L;
    mul(arg0: number, arg1: Vector2L): Vector2L;
    mul(arg0: Vector2Lc): Vector2L;
    mul(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    mul(arg0: Vector2ic): Vector2L;
    mul(arg0: Vector2ic, arg1: Vector2L): Vector2L;
    negate(): Vector2L;
    negate(arg0: Vector2L): Vector2L;
    readExternal(arg0: ObjectInput): void;
    set(arg0: ByteBuffer): Vector2L;
    set(arg0: LongBuffer): Vector2L;
    set(arg0: number, arg1: ByteBuffer): Vector2L;
    set(arg0: number, arg1: LongBuffer): Vector2L;
    set(arg0: number): Vector2L;
    set(arg0: number, arg1: number): Vector2L;
    set(arg0: number[]): Vector2L;
    set(arg0: Vector2Lc): Vector2L;
    set(arg0: Vector2dc): Vector2L;
    set(arg0: Vector2dc, arg1: number): Vector2L;
    set(arg0: Vector2fc, arg1: number): Vector2L;
    set(arg0: Vector2ic): Vector2L;
    setComponent(arg0: number, arg1: number): Vector2L;
    setFromAddress(arg0: number): Vector2L;
    sub(arg0: number, arg1: number): Vector2L;
    sub(arg0: number, arg1: number, arg2: Vector2L): Vector2L;
    sub(arg0: Vector2Lc): Vector2L;
    sub(arg0: Vector2Lc, arg1: Vector2L): Vector2L;
    sub(arg0: Vector2ic): Vector2L;
    sub(arg0: Vector2ic, arg1: Vector2L): Vector2L;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    zero(): Vector2L;
}