import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { LinkedListMultimap$KeyList } from '../../../../com/google/common/collect/LinkedListMultimap$KeyList.d.ts'
import type { LinkedListMultimap$Node } from '../../../../com/google/common/collect/LinkedListMultimap$Node.d.ts'
import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LinkedListMultimap<K extends unknown, V extends unknown> extends AbstractMultimap<K, V> implements ListMultimap<K, V>, Serializable {
    static create(): LinkedListMultimap<Object, Object>;
    static create(parammultimap: Multimap<Object, Object>): LinkedListMultimap<Object, Object>;
    static create(paramexpectedKeys: number): LinkedListMultimap<Object, Object>;
    constructor()
    // private head: LinkedListMultimap$Node<K, V>;
    // private keyToKeyList: Map<K, LinkedListMultimap$KeyList<K, V>>;
    // private modCount: number;
    // private size: number;
    // private tail: LinkedListMultimap$Node<K, V>;
    // private addNode(key: K, value: V, nextSibling: LinkedListMultimap$Node<K, V>): LinkedListMultimap$Node<K, V>;
    clear(): void;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    createAsMap(): Map<K, V[]>;
    createEntries(): Map$Entry<K, V>[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): V[];
    entries(): Map$Entry<K, V>[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    get(key: K): V[];
    // private getCopy(key: K): V[];
    isEmpty(): boolean;
    put(key: K, value: V): boolean;
    // private readObject(stream: ObjectInputStream): void;
    removeAll(key: Object): V[];
    // private removeAllNodes(key: K): void;
    // private removeNode(node: LinkedListMultimap$Node<K, V>): void;
    replaceValues(key: K, values: V[]): V[];
    size(): number;
    values(): V[];
    // private writeObject(stream: ObjectOutputStream): void;
}