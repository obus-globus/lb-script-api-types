import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractListMultimap } from '../../../../com/google/common/collect/AbstractListMultimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$CustomListMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractListMultimap<K, V> {
    constructor(map: Map<K, V[]>, factory: () => V[])
    // private factory: () => V[];
    createAsMap(): Map<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    createKeySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    // private writeObject(stream: ObjectOutputStream): void;
}