import type { ImmutableListMultimap } from '../../../../com/google/common/collect/ImmutableListMultimap.d.ts'
import type { ImmutableMultimap$Builder } from '../../../../com/google/common/collect/ImmutableMultimap$Builder.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableListMultimap$Builder<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ImmutableMultimap$Builder<K, V> {
    constructor()
    constructor(expectedKeys: number)
    build(): ImmutableListMultimap<K, V>;
    combine(other: ImmutableMultimap$Builder<K, V>): ImmutableListMultimap$Builder<K, V>;
    expectedValuesPerKey(expectedValuesPerKey: number): ImmutableListMultimap$Builder<K, V>;
    orderKeysBy(keyComparator: (param0: K) => kotlin.Boolean): ImmutableListMultimap$Builder<K, V>;
    orderValuesBy(valueComparator: (param0: V) => kotlin.Boolean): ImmutableListMultimap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableListMultimap$Builder<K, V>;
    put(key: K, value: V): ImmutableListMultimap$Builder<K, V>;
    putAll(key: K, values: V[]): ImmutableListMultimap$Builder<K, V>;
    putAll(key: K, values: V[]): ImmutableListMultimap$Builder<K, V>;
    putAll(multimap: Multimap<K, V>): ImmutableListMultimap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableListMultimap$Builder<K, V>;
}