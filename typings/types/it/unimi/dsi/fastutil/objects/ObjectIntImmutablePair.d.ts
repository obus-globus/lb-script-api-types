import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ObjectIntPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectIntImmutablePair<K extends Object | number | string | boolean> extends Object implements ObjectIntPair<K>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectIntImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ObjectIntPair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ObjectIntPair<K>;
    rightInt(): number;
    second(): number;
    second(arg0: number): ObjectIntPair<K>;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectIntPair<K>;
    valueInt(): number;
}