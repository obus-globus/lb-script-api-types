import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractSortedKeySortedSetMultimap } from '../../../../com/google/common/collect/AbstractSortedKeySortedSetMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeMultimap<K extends unknown, V extends unknown> extends AbstractSortedKeySortedSetMultimap<K, V> {
    static create<K extends Comparable<Object>, V extends Comparable<Object>>(): TreeMultimap<K, V>;
    static create<K extends Comparable<Object>, V extends Comparable<Object>>(parammultimap: Multimap<K, V>): TreeMultimap<K, V>;
    static create<K extends unknown, V extends unknown>(paramkeyComparator: (param0: Object, param1: Object) => number, paramvalueComparator: (param0: Object, param1: Object) => number): TreeMultimap<K, V>;
    constructor(keyComparator: (param0: K, param1: K) => number, valueComparator: (param0: V, param1: V) => number)
    // private keyComparator: (param0: K, param1: K) => number;
    // private valueComparator: (param0: V, param1: V) => number;
    asMap(): JavaMap<K, V[]>;
    createAsMap(): JavaMap<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    get(key: K): V[];
    keyComparator(): (param0: K, param1: K) => number;
    keySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    valueComparator(): (param0: V, param1: V) => number;
    // private writeObject(stream: ObjectOutputStream): void;
}