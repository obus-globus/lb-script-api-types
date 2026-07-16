import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanBigArrays$BigArrayHashStrategy extends Object implements Hash$Strategy<boolean[][]>, Serializable {
    constructor(arg0: any)
    equals(other: Object | null): boolean;
    equals(arg0: boolean[][], arg1: boolean[][]): boolean;
    hashCode(): number;
    hashCode(arg0: boolean[][]): number;
}