import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ObjectDoublePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectDoubleImmutablePair<K extends unknown> extends Object implements ObjectDoublePair<K>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectDoubleImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ObjectDoublePair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ObjectDoublePair<K>;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ObjectDoublePair<K>;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectDoublePair<K>;
    valueDouble(): number;
}