import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectIntPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIntPair.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Object2IntLinkedOpenHashMap$MapEntry extends Object implements Object2IntMap$Entry<K>, ObjectIntPair<K>, Map$Entry<K, number> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator<K extends unknown>(): (param0: ObjectIntPair<K>, param1: ObjectIntPair<K>) => number;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectIntPair<K>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
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