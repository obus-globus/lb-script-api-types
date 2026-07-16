import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectReferencePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2ReferenceOpenCustomHashMap$MapEntry extends Object implements Object2ReferenceMap$Entry<K, V>, ObjectReferencePair<K, V>, Map$Entry<K, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ObjectReferencePair<K, V>;
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown, V extends unknown>(arg0: K): Pair<K, V>;
    right<V extends unknown>(): V;
    right<K extends unknown, V extends unknown>(arg0: V): ObjectReferencePair<K, V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}