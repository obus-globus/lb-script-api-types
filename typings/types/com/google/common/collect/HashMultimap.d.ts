import type { AbstractSetMultimap } from '../../../../com/google/common/collect/AbstractSetMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashMultimap<K extends unknown, V extends unknown> extends AbstractSetMultimap<K, V> {
    static create(): HashMultimap<Object, Object>;
    static create(parammultimap: Multimap<Object, Object>): HashMultimap<Object, Object>;
    static create(paramexpectedKeys: number, paramexpectedValuesPerKey: number): HashMultimap<Object, Object>;
    private constructor()
    private constructor(multimap: Multimap<K, V>)
    private constructor(expectedKeys: number, expectedValuesPerKey: number)
    // private expectedValuesPerKey: number;
    createCollection(): V[];
    createCollection(key: K): V[];
    // private readObject(stream: ObjectInputStream): void;
    // private writeObject(stream: ObjectOutputStream): void;
}