import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ReferenceBytePair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceByteImmutablePair<K extends Object | number | string | boolean> extends Object implements ReferenceBytePair<K>, Serializable {
    static of(paramarg0: Object | null, paramarg1: number): ReferenceByteImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceBytePair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ReferenceBytePair<K>;
    rightByte(): number;
    second(): number;
    second(arg0: number): ReferenceBytePair<K>;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceBytePair<K>;
    valueByte(): number;
}