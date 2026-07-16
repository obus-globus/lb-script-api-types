import type { BaseImmutableMultimap } from '../../../../com/google/common/collect/BaseImmutableMultimap.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class ImmutableMultimap<K extends unknown, V extends unknown> extends BaseImmutableMultimap<K, V> implements Serializable {
    static builder<K extends unknown, V extends unknown>(): ImmutableMultimap$Builder<K, V>;
    static builderWithExpectedKeys<K extends unknown, V extends unknown>(paramexpectedKeys: number): ImmutableMultimap$Builder<K, V>;
    static copyOf<K extends unknown, V extends unknown>(parammultimap: Multimap<K, V>): ImmutableMultimap<K, V>;
    static copyOf<K extends unknown, V extends unknown>(paramentries: Map$Entry<K, V>[]): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V): ImmutableMultimap<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V): ImmutableMultimap<K, V>;
    constructor(map: Map<K, V[]>, size: number)
    // private map: Map<K, V[]>;
    // private size: number;
    asMap(): Map<K, V[]>;
    clear(): void;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    createAsMap(): Map<K, V[]>;
    createEntries(): Map$Entry<K, V>[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): V[];
    entries(): Map$Entry<K, V>[];
    entryIterator(): UnmodifiableIterator<Map$Entry<K, V>>;
    entrySpliterator(): Spliterator<Map$Entry<K, V>>;
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): V[];
    inverse(): ImmutableMultimap<V, K>;
    isPartialView(): boolean;
    keySet(): K[];
    keys(): K[];
    put(key: K, value: V): boolean;
    putAll(key: K, values: V[]): boolean;
    putAll(multimap: Multimap<K, V>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    size(): number;
    valueIterator(): UnmodifiableIterator<V>;
    values(): V[];
}