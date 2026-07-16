import type { AbstractSetMultimap } from '../../../../com/google/common/collect/AbstractSetMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashMultimap<K extends unknown, V extends unknown> extends AbstractSetMultimap<K, V> {
    static create<K extends unknown, V extends unknown>(): HashMultimap<K, V>;
    static create<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): HashMultimap<K, V>;
    static create<K extends unknown, V extends unknown>(paramexpectedKeys: number, paramexpectedValuesPerKey: number): HashMultimap<K, V>;
    private constructor()
    private constructor(multimap: Multimap<K, V>)
    private constructor(expectedKeys: number, expectedValuesPerKey: number)
    // private expectedValuesPerKey: number;
    createCollection(): V[];
    createCollection(key: K): V[];
    // private readObject(stream: ObjectInputStream): void;
    // private writeObject(stream: ObjectOutputStream): void;
}