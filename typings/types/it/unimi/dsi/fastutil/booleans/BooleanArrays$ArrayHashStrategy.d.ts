import type { BooleanArrays$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanArrays$ArrayHashStrategy extends Object implements Hash$Strategy<(Object | null)[]>, Serializable {
    private constructor()
    constructor(arg0: BooleanArrays$1)
    equals(other: Object | null): boolean;
    equals(arg0: (Object | null)[], arg1: (Object | null)[]): boolean;
    hashCode(): number;
    hashCode(arg0: (Object | null)[]): number;
}