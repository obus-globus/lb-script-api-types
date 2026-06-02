import type { AbstractSortedKeySortedSetMultimap } from '../../../../com/google/common/collect/AbstractSortedKeySortedSetMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractSortedKeySortedSetMultimap<K, V> {
    static create(): TreeMultimap<Object, Object>;
    static create(parammultimap: Multimap<Object, Object>): TreeMultimap<Object, Object>;
    static create(paramkeyComparator: (param0: Object | null) => kotlin.Boolean, paramvalueComparator: (param0: Object | null) => kotlin.Boolean): TreeMultimap<Object, Object>;
    constructor(keyComparator: (param0: K) => kotlin.Boolean, valueComparator: (param0: V) => kotlin.Boolean)
    private constructor(keyComparator: (param0: K) => kotlin.Boolean, valueComparator: (param0: V) => kotlin.Boolean, multimap: Multimap<K, V>)
    // private keyComparator: (param0: K) => kotlin.Boolean;
    // private valueComparator: (param0: V) => kotlin.Boolean;
    asMap(): Map<K, E[]>;
    createAsMap(): Map<K, E[]>;
    createCollection(): V[];
    createCollection(key: K): E[];
    get(key: K): V[];
    keyComparator(): (param0: K) => kotlin.Boolean;
    keySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    valueComparator(): (param0: V) => kotlin.Boolean;
    // private writeObject(stream: ObjectOutputStream): void;
}