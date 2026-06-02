import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BiConsumer } from '../../../../../org/apache/logging/log4j/util/BiConsumer.d.ts'
import type { IndexedStringMap } from '../../../../../org/apache/logging/log4j/util/IndexedStringMap.d.ts'
import type { ReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { TriConsumer } from '../../../../../org/apache/logging/log4j/util/TriConsumer.d.ts'
export class SortedArrayStringMap extends Object implements IndexedStringMap {
    constructor()
    constructor(initialCapacity: number)
    constructor(map: { [key: string]: Object | null })
    constructor(other: ReadOnlyStringMap)
    // private immutable: boolean;
    // private iterating: boolean;
    // private keys: string[];
    // private size: number;
    // private threshold: number;
    // private values: Object[];
    // private assertNoConcurrentModification(): void;
    // private assertNotFrozen(): void;
    clear(): void;
    containsKey(key: string): boolean;
    // private ensureCapacity(): void;
    equals(obj: Object | null): boolean;
    forEach(action: (param0: string, param1: V) => void): void;
    forEach<T extends Object | number | string | boolean>(action: TriConsumer<string, V, T>, state: T): void;
    freeze(): void;
    getKeyAt(index: number): string;
    getValue<V extends Object | number | string | boolean>(key: string): V;
    getValueAt<V extends Object | number | string | boolean>(index: number): V;
    hashCode(): number;
    indexOfKey(key: string): number;
    // private inflateTable(toSize: number): void;
    // private initFrom0(other: SortedArrayStringMap): void;
    // private insertAt(index: number, key: string, value: Object): void;
    isEmpty(): boolean;
    isFrozen(): boolean;
    // private merge(other: SortedArrayStringMap): void;
    // private nullKeyIndex(): number;
    putAll(source: ReadOnlyStringMap): void;
    putValue(key: string, value: Object): void;
    // private readObject(s: ObjectInputStream): void;
    remove(key: string): void;
    // private resize(newCapacity: number): void;
    size(): number;
    toMap(): { [key: string]: string };
    toString(): string;
    // private writeObject(s: ObjectOutputStream): void;
}