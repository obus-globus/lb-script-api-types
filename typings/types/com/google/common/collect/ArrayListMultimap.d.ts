import type { AbstractListMultimap } from '../../../../com/google/common/collect/AbstractListMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArrayListMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractListMultimap<K, V> {
    static create(): ArrayListMultimap<Object, Object>;
    static create(parammultimap: Multimap<Object, Object>): ArrayListMultimap<Object, Object>;
    static create(paramexpectedKeys: number, paramexpectedValuesPerKey: number): ArrayListMultimap<Object, Object>;
    private constructor()
    private constructor(multimap: Multimap<K, V>)
    private constructor(expectedKeys: number, expectedValuesPerKey: number)
    // private expectedValuesPerKey: number;
    createCollection(): V[];
    // private readObject(stream: ObjectInputStream): void;
    trimToSize(): void;
    // private writeObject(stream: ObjectOutputStream): void;
}