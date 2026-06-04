import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Vector2L } from '../../org/joml/Vector2L.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2dc } from '../../org/joml/Vector2dc.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
import type { Vector2ic } from '../../org/joml/Vector2ic.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../org/joml/Vector3ic.d.ts'
export class Vector3i extends Object implements Externalizable, Cloneable, Vector3ic {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static distanceSquared(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static length(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static lengthSquared(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: IntBuffer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: ByteBuffer)
    constructor(arg0: number, arg1: IntBuffer)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number[])
    constructor(arg0: Vector2dc, arg1: number, arg2: number)
    constructor(arg0: Vector2fc, arg1: number, arg2: number)
    constructor(arg0: Vector2ic, arg1: number)
    constructor(arg0: Vector3dc, arg1: number)
    constructor(arg0: Vector3fc, arg1: number)
    constructor(arg0: Vector3ic)
    x: number;
    y: number;
    z: number;
    absolute(): Vector3i;
    absolute(arg0: Vector3i): Vector3i;
    add(arg0: number, arg1: number, arg2: number): Vector3i;
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i;
    add(arg0: Vector3ic): Vector3i;
    add(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    protected clone(): Object;
    clone(): Object;
    distance(arg0: number, arg1: number, arg2: number): number;
    distance(arg0: Vector3ic): number;
    distanceSquared(arg0: number, arg1: number, arg2: number): number;
    distanceSquared(arg0: Vector3ic): number;
    div(arg0: number): Vector3i;
    div(arg0: number, arg1: Vector3i): Vector3i;
    equals(arg0: Object | null): boolean;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    get(arg0: ByteBuffer): ByteBuffer;
    get(arg0: IntBuffer): IntBuffer;
    get(arg0: number): number;
    get(arg0: number, arg1: ByteBuffer): ByteBuffer;
    get(arg0: number, arg1: IntBuffer): IntBuffer;
    getToAddress(arg0: number): Vector3ic;
    gridDistance(arg0: number, arg1: number, arg2: number): number;
    gridDistance(arg0: Vector3ic): number;
    hashCode(): number;
    length(): number;
    lengthSquared(): number;
    max(arg0: Vector3ic): Vector3i;
    max(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    maxComponent(): number;
    min(arg0: Vector3ic): Vector3i;
    min(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    minComponent(): number;
    mul(arg0: number): Vector3i;
    mul(arg0: number, arg1: number, arg2: number): Vector3i;
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i;
    mul(arg0: number, arg1: Vector3i): Vector3i;
    mul(arg0: Vector3ic): Vector3i;
    mul(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    negate(): Vector3i;
    negate(arg0: Vector3i): Vector3i;
    readExternal(arg0: ObjectInput): void;
    set(arg0: ByteBuffer): Vector3i;
    set(arg0: IntBuffer): Vector3i;
    set(arg0: number): Vector3i;
    set(arg0: number, arg1: ByteBuffer): Vector3i;
    set(arg0: number, arg1: IntBuffer): Vector3i;
    set(arg0: number, arg1: number, arg2: number): Vector3i;
    set(arg0: number[]): Vector3i;
    set(arg0: Vector2ic, arg1: number): Vector3i;
    set(arg0: Vector3dc): Vector3i;
    set(arg0: Vector3dc, arg1: number): Vector3i;
    set(arg0: Vector3fc, arg1: number): Vector3i;
    set(arg0: Vector3ic): Vector3i;
    setComponent(arg0: number, arg1: number): Vector3i;
    setFromAddress(arg0: number): Vector3i;
    sub(arg0: number, arg1: number, arg2: number): Vector3i;
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i;
    sub(arg0: Vector3ic): Vector3i;
    sub(arg0: Vector3ic, arg1: Vector3i): Vector3i;
    toString(): string;
    toString(arg0: NumberFormat): string;
    writeExternal(arg0: ObjectOutput): void;
    x(): number;
    xy(arg0: Vector2L): Vector2L;
    xy(arg0: Vector2d): Vector2d;
    xy(arg0: Vector2f): Vector2f;
    xy(arg0: Vector2i): Vector2i;
    y(): number;
    z(): number;
    zero(): Vector3i;
}