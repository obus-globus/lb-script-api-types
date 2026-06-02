import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractSortedSetMultimap } from '../../../../com/google/common/collect/AbstractSortedSetMultimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$CustomSortedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractSortedSetMultimap<K, V> {
    constructor(map: Map<K, E[]>, factory: () => V[])
    // private factory: () => V[];
    // private valueComparator: (param0: V) => kotlin.Boolean;
    createAsMap(): Map<K, E[]>;
    createCollection(): V[];
    createKeySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    valueComparator(): (param0: V) => kotlin.Boolean;
    // private writeObject(stream: ObjectOutputStream): void;
}