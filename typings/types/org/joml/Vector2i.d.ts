import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
export class Vector2i extends Object implements Externalizable, Cloneable, Vector2ic {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static length(paramarg0: number, paramarg1: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: IntBuffer)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: IntBuffer)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number[])
    constructor(arg0: Vector2dc, arg1: number)
    constructor(arg0: Vector2fc, arg1: number)
    constructor(arg0: Vector2ic)
    x: number;
    y: number;
    absolute(): Vector2i;
    absolute(arg0: Vector2i): Vector2i;
    add(arg0: number, arg1: number): Vector2i;
    add(arg0: number, arg1: number, arg2: Vector2i): Vector2i;
    add(arg0: Vector2ic): Vector2i;
    add(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    protected clone(): Object;
    clone(): Object;
    distance(arg0: number, arg1: number): number;
    distance(arg0: Vector2ic): number;
    distanceSquared(arg0: number, arg1: number): number;
    distanceSquared(arg0: Vector2ic): number;
    div(arg0: number): Vector2i;
    div(arg0: number, arg1: Vector2i): Vector2i;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: IntBuffer): IntBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: IntBuffer): IntBuffer;
    getToAddress(arg0: number): Vector2ic;
    gridDistance(arg0: number, arg1: number): number;
    gridDistance(arg0: Vector2ic): number;
    hashCode(): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector2ic): Vector2i;
    max(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    maxComponent(): number;
    min(arg0: Vector2ic): Vector2i;
    min(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    minComponent(): number;
    mul(arg0: number): Vector2i;
    mul(arg0: number, arg1: number): Vector2i;
    mul(arg0: number, arg1: number, arg2: Vector2i): Vector2i;
    mul(arg0: number, arg1: Vector2i): Vector2i;
    mul(arg0: Vector2ic): Vector2i;
    mul(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    negate(): Vector2i;
    negate(arg0: Vector2i): Vector2i;
    readExternal(arg0: ObjectInput): void;
    set(arg0: ByteBuffer): Vector2i;
    set(arg0: IntBuffer): Vector2i;
    set(arg0: number): Vector2i;
    set(arg0: number, arg1: ByteBuffer): Vector2i;
    set(arg0: number, arg1: IntBuffer): Vector2i;
    set(arg0: number, arg1: number): Vector2i;
    set(arg0: number[]): Vector2i;
    set(arg0: Vector2dc): Vector2i;
    set(arg0: Vector2dc, arg1: number): Vector2i;
    set(arg0: Vector2fc, arg1: number): Vector2i;
    set(arg0: Vector2ic): Vector2i;
    setComponent(arg0: number, arg1: number): Vector2i;
    setFromAddress(arg0: number): Vector2i;
    sub(arg0: number, arg1: number): Vector2i;
    sub(arg0: number, arg1: number, arg2: Vector2i): Vector2i;
    sub(arg0: Vector2ic): Vector2i;
    sub(arg0: Vector2ic, arg1: Vector2i): Vector2i;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    zero(): Vector2i;
}