import type { ObjectBigArrays$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigArrays$BigArrayHashStrategy<K extends unknown> extends Object implements Hash$Strategy<K[][]>, Serializable {
    private constructor()
    constructor(arg0: ObjectBigArrays$1)
    equals(other: Object | null): boolean;
    equals(arg0: K[][], arg1: K[][]): boolean;
    hashCode(): number;
    hashCode(arg0: K[][]): number;
}