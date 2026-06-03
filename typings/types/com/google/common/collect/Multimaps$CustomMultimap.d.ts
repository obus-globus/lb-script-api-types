import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractMapBasedMultimap } from '../../../../com/google/common/collect/AbstractMapBasedMultimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$CustomMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMapBasedMultimap<K, V> {
    constructor(map: Map<K, E[]>, factory: () => E[])
    // private factory: () => E[];
    createAsMap(): Map<K, E[]>;
    createCollection(): E[];
    createCollection(key: K): E[];
    createKeySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    unmodifiableCollectionSubclass(collection: E[]): E[];
    wrapCollection(key: K, collection: E[]): E[];
    // private writeObject(stream: ObjectOutputStream): void;
}