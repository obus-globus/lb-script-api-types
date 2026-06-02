import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableBiMap$Builder<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ImmutableMap$Builder<K, V> {
    constructor()
    constructor(size: number)
    build(): Map<K, V>;
    buildJdkBacked(): Map<K, V>;
    buildKeepingLast(): Map<K, V>;
    buildOrThrow(): Map<K, V>;
    combine(builder: ImmutableMap$Builder<K, V>): ImmutableBiMap$Builder<K, V>;
    orderEntriesByValue(valueComparator: (param0: V) => kotlin.Boolean): ImmutableBiMap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableBiMap$Builder<K, V>;
    put(key: K, value: V): ImmutableBiMap$Builder<K, V>;
    putAll(map: Map<K, V>): ImmutableBiMap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableBiMap$Builder<K, V>;
}