import type { ImmutableCollection$Builder } from '../../../../com/google/common/collect/ImmutableCollection$Builder.d.ts'
import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableMultimap$Builder<K extends unknown, V extends unknown> extends Object {
    constructor()
    constructor(expectedKeys: number)
    // private builderMap: Map<K, ImmutableCollection$Builder<V>>;
    // private expectedValuesPerKey: number;
    // private keyComparator: (param0: K, param1: K) => number;
    // private valueComparator: (param0: V, param1: V) => number;
    build(): ImmutableMultimap<K, V>;
    combine(other: ImmutableMultimap$Builder<K, V>): ImmutableMultimap$Builder<K, V>;
    ensureBuilderMapNonNull(): Map<K, ImmutableCollection$Builder<V>>;
    expectedValueCollectionSize(defaultExpectedValues: number, values: (Object | null)[]): number;
    expectedValuesPerKey(expectedValuesPerKey: number): ImmutableMultimap$Builder<K, V>;
    newValueCollectionBuilderWithExpectedSize(expectedSize: number): ImmutableCollection$Builder<V>;
    orderKeysBy(keyComparator: (param0: K, param1: K) => number): ImmutableMultimap$Builder<K, V>;
    orderValuesBy(valueComparator: (param0: V, param1: V) => number): ImmutableMultimap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableMultimap$Builder<K, V>;
    put(key: K, value: V): ImmutableMultimap$Builder<K, V>;
    putAll(key: K, ...values: V[]): ImmutableMultimap$Builder<K, V>;
    putAll(key: K, values: V[]): ImmutableMultimap$Builder<K, V>;
    putAll(multimap: Multimap<K, V>): ImmutableMultimap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableMultimap$Builder<K, V>;
}