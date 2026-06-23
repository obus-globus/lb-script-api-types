import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectIntPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIntPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2IntLinkedOpenCustomHashMap$MapEntry extends Object implements Object2IntMap$Entry<K>, ObjectIntPair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectIntPair<Object>;
    constructor(null_: Object2IntLinkedOpenCustomHashMap$MapEntry)
    constructor(null_: Object2IntLinkedOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    equals(arg0: Object | null): boolean;
    getIntValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ObjectIntPair<K>;
    rightInt(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ObjectIntPair<K>;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ObjectIntPair<K>;
    valueInt(): number;
}