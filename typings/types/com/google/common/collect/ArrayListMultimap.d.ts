import type { AbstractListMultimap } from '../../../../com/google/common/collect/AbstractListMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArrayListMultimap<K extends unknown, V extends unknown> extends AbstractListMultimap<K, V> {
    static create<K extends unknown, V extends unknown>(): ArrayListMultimap<K, V>;
    static create<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): ArrayListMultimap<K, V>;
    static create<K extends unknown, V extends unknown>(paramexpectedKeys: number, paramexpectedValuesPerKey: number): ArrayListMultimap<K, V>;
    private constructor()
    private constructor(multimap: Multimap<K, V>)
    private constructor(expectedKeys: number, expectedValuesPerKey: number)
    // private expectedValuesPerKey: number;
    createCollection(): V[];
    createCollection(key: K): V[];
    // private readObject(stream: ObjectInputStream): void;
    trimToSize(): void;
    // private writeObject(stream: ObjectOutputStream): void;
}