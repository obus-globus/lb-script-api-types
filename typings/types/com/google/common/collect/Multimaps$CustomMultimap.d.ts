import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractMapBasedMultimap } from '../../../../com/google/common/collect/AbstractMapBasedMultimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$CustomMultimap<K extends unknown, V extends unknown> extends AbstractMapBasedMultimap<K, V> {
    constructor(map: Map<K, V[]>, factory: () => V[])
    // private factory: () => V[];
    createAsMap(): Map<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    createKeySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    unmodifiableCollectionSubclass<E extends unknown>(collection: E[]): E[];
    wrapCollection(key: K, collection: V[]): V[];
    // private writeObject(stream: ObjectOutputStream): void;
}