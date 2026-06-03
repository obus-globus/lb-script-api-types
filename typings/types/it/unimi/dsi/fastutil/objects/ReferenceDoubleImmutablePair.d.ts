import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ReferenceDoublePair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceDoubleImmutablePair<K extends Object | number | string | boolean> extends Object implements ReferenceDoublePair<K>, Serializable {
    static of(paramarg0: Object | null, paramarg1: number): ReferenceDoubleImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceDoublePair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ReferenceDoublePair<K>;
    right(arg0: number): ReferenceDoublePair<K>;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ReferenceDoublePair<K>;
    second(arg0: number): ReferenceDoublePair<K>;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceDoublePair<K>;
    value(arg0: number): ReferenceDoublePair<K>;
    valueDouble(): number;
}