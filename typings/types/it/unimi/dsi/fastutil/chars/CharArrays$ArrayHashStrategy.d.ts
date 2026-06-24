import type { CharArrays$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharArrays$ArrayHashStrategy extends Object implements Hash$Strategy<string[]>, Serializable {
    private constructor()
    constructor(arg0: CharArrays$1)
    equals(other: Object | null): boolean;
    equals(arg0: string[], arg1: string[]): boolean;
    hashCode(): number;
    hashCode(arg0: string[]): number;
}