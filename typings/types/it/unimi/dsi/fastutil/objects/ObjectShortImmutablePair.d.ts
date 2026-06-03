import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ObjectShortPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectShortImmutablePair<K extends Object | number | string | boolean> extends Object implements ObjectShortPair<K>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectShortImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ObjectShortPair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ObjectShortPair<K>;
    right(arg0: number): ObjectShortPair<K>;
    rightShort(): number;
    second(): number;
    second(arg0: number): ObjectShortPair<K>;
    second(arg0: number): ObjectShortPair<K>;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectShortPair<K>;
    value(arg0: number): ObjectShortPair<K>;
    valueShort(): number;
}