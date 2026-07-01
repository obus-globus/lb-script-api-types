import type { AbstractSortedKeySortedSetMultimap } from '../../../../com/google/common/collect/AbstractSortedKeySortedSetMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeMultimap<K extends unknown, V extends unknown> extends AbstractSortedKeySortedSetMultimap<K, V> {
    static create(): TreeMultimap<Object, Object>;
    static create(parammultimap: Multimap<Object, Object>): TreeMultimap<Object, Object>;
    static create(paramkeyComparator: (param0: Object) => boolean, paramvalueComparator: (param0: Object) => boolean): TreeMultimap<Object, Object>;
    constructor(keyComparator: (param0: Object) => boolean, valueComparator: (param0: Object) => boolean)
    // private keyComparator: (param0: Object) => boolean;
    // private valueComparator: (param0: Object) => boolean;
    asMap(): Map<K, V[]>;
    createAsMap(): Map<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    get(key: K): V[];
    keyComparator(): (param0: Object) => boolean;
    keySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    valueComparator(): (param0: Object) => boolean;
    // private writeObject(stream: ObjectOutputStream): void;
}