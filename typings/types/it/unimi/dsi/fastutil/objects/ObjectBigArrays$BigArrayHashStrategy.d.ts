import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigArrays$BigArrayHashStrategy<K extends unknown> extends Object implements Hash$Strategy<K[][]>, Serializable {
    constructor(arg0: any)
    equals(other: Object | null): boolean;
    equals(arg0: K[][], arg1: K[][]): boolean;
    hashCode(): number;
    hashCode(arg0: K[][]): number;
}