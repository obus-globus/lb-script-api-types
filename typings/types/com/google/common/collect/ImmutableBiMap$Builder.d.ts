import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableBiMap$Builder<K extends unknown, V extends unknown> extends ImmutableMap$Builder<K, V> {
    constructor()
    constructor(size: number)
    build(): JavaMap<K, V>;
    buildJdkBacked(): JavaMap<K, V>;
    buildKeepingLast(): JavaMap<K, V>;
    buildOrThrow(): JavaMap<K, V>;
    combine(builder: ImmutableMap$Builder<K, V>): ImmutableBiMap$Builder<K, V>;
    orderEntriesByValue(valueComparator: (param0: V, param1: V) => number): ImmutableBiMap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableBiMap$Builder<K, V>;
    put(key: K, value: V): ImmutableBiMap$Builder<K, V>;
    putAll(map: JavaMap<K, V>): ImmutableBiMap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableBiMap$Builder<K, V>;
}