import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractSetMultimap } from '../../../../com/google/common/collect/AbstractSetMultimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$CustomSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractSetMultimap<K, V> {
    constructor(map: Map<K, E[]>, factory: () => V[])
    // private factory: () => V[];
    createAsMap(): Map<K, E[]>;
    createCollection(): V[];
    createKeySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    unmodifiableCollectionSubclass(collection: E[]): E[];
    wrapCollection(key: K, collection: E[]): E[];
    // private writeObject(stream: ObjectOutputStream): void;
}