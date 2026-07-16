import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableSortedMap$Builder<K extends unknown, V extends unknown> extends ImmutableMap$Builder<K, V> {
    constructor(comparator: (param0: K, param1: K) => number)
    // private comparator: (param0: K, param1: K) => number;
    build(): Map<K, V>;
    buildKeepingLast(): Map<K, V>;
    buildOrThrow(): Map<K, V>;
    combine(other: ImmutableMap$Builder<K, V>): ImmutableSortedMap$Builder<K, V>;
    orderEntriesByValue(valueComparator: (param0: V, param1: V) => number): ImmutableSortedMap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableSortedMap$Builder<K, V>;
    put(key: K, value: V): ImmutableSortedMap$Builder<K, V>;
    putAll(map: Map<K, V>): ImmutableSortedMap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableSortedMap$Builder<K, V>;
}