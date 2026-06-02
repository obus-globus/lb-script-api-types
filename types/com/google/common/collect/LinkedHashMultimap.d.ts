import type { AbstractSetMultimap } from '../../../../com/google/common/collect/AbstractSetMultimap.d.ts'
import type { LinkedHashMultimap$MultimapIterationChain } from '../../../../com/google/common/collect/LinkedHashMultimap$MultimapIterationChain.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LinkedHashMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractSetMultimap<K, V> {
    static create(): LinkedHashMultimap<Object, Object>;
    static create(parammultimap: Multimap<Object, Object>): LinkedHashMultimap<Object, Object>;
    static create(paramexpectedKeys: number, paramexpectedValuesPerKey: number): LinkedHashMultimap<Object, Object>;
    private constructor(keyCapacity: number, valueSetCapacity: number)
    // private multimapIterationChain: LinkedHashMultimap$MultimapIterationChain<K, V>;
    // private valueSetCapacity: number;
    createCollection(): V[];
    createCollection(key: K): E[];
    entries(): Map$Entry<K, V>[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    entrySpliterator(): Spliterator<Map$Entry<K, V>>;
    keySet(): K[];
    // private readObject(stream: ObjectInputStream): void;
    replaceValues(key: K, values: V[]): V[];
    valueIterator(): Iterator<V>;
    valueSpliterator(): Spliterator<V>;
    values(): E[];
    // private writeObject(stream: ObjectOutputStream): void;
}