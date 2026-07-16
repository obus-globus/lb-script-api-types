import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectLongPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectLongPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2LongOpenCustomHashMap$MapEntry extends Object implements Object2LongMap$Entry<K>, ObjectLongPair<K>, Map$Entry<K, number> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator<K extends unknown>(): (param0: ObjectLongPair<K>, param1: ObjectLongPair<K>) => number;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectLongPair<K>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    equals(arg0: Object | null): boolean;
    getLongValue(): number;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, number>;
    right(): number;
    right<K extends unknown>(arg0: number): ObjectLongPair<K>;
    rightLong(): number;
    second(): number;
    second<K extends unknown>(arg0: number): ObjectLongPair<K>;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value<K extends unknown>(arg0: number): ObjectLongPair<K>;
    valueLong(): number;
}