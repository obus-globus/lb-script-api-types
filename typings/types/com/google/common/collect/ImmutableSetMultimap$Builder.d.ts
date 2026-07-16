import type { ImmutableCollection$Builder } from '../../../../com/google/common/collect/ImmutableCollection$Builder.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { ImmutableSetMultimap } from '../../../../com/google/common/collect/ImmutableSetMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableSetMultimap$Builder<K extends unknown, V extends unknown> extends ImmutableMultimap$Builder<K, V> {
    constructor()
    constructor(expectedKeys: number)
    build(): ImmutableSetMultimap<K, V>;
    combine(other: ImmutableMultimap$Builder<K, V>): ImmutableSetMultimap$Builder<K, V>;
    expectedValueCollectionSize(defaultExpectedValues: number, values: (Object | null)[]): number;
    expectedValuesPerKey(expectedValuesPerKey: number): ImmutableSetMultimap$Builder<K, V>;
    newValueCollectionBuilderWithExpectedSize(expectedSize: number): ImmutableCollection$Builder<V>;
    orderKeysBy(keyComparator: (param0: K, param1: K) => number): ImmutableSetMultimap$Builder<K, V>;
    orderValuesBy(valueComparator: (param0: V, param1: V) => number): ImmutableSetMultimap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableSetMultimap$Builder<K, V>;
    put(key: K, value: V): ImmutableSetMultimap$Builder<K, V>;
    putAll(key: K, ...values: V[]): ImmutableSetMultimap$Builder<K, V>;
    putAll(key: K, values: V[]): ImmutableSetMultimap$Builder<K, V>;
    putAll(multimap: Multimap<K, V>): ImmutableSetMultimap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableSetMultimap$Builder<K, V>;
}