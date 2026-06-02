import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanArrays$ArrayHashStrategy extends Object implements Hash$Strategy<boolean[]>, Serializable {
    private constructor()
    equals(arg0: (Object | null)[], arg1: (Object | null)[]): boolean;
    hashCode(arg0: (Object | null)[]): number;
}