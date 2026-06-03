import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleArrays$ArrayHashStrategy extends Object implements Hash$Strategy<number[]>, Serializable {
    private constructor()
    equals(other: Object | null): boolean;
    equals(arg0: number[], arg1: number[]): boolean;
    hashCode(): number;
    hashCode(arg0: number[]): number;
}