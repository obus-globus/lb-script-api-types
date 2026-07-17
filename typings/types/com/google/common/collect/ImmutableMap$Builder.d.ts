import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableMap$Builder<K extends unknown, V extends unknown> extends Object {
    constructor()
    constructor(initialCapacity: number)
    // private entries: Map$Entry<K, V>[];
    // private entriesUsed: boolean;
    // private size: number;
    // private valueComparator: (param0: V, param1: V) => number;
    build(): JavaMap<K, V>;
    // private build(throwIfDuplicateKeys: boolean): JavaMap<K, V>;
    buildJdkBacked(): JavaMap<K, V>;
    buildKeepingLast(): JavaMap<K, V>;
    buildOrThrow(): JavaMap<K, V>;
    combine(other: ImmutableMap$Builder<K, V>): ImmutableMap$Builder<K, V>;
    // private ensureCapacity(minCapacity: number): void;
    orderEntriesByValue(valueComparator: (param0: V, param1: V) => number): ImmutableMap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableMap$Builder<K, V>;
    put(key: K, value: V): ImmutableMap$Builder<K, V>;
    putAll(map: JavaMap<K, V>): ImmutableMap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableMap$Builder<K, V>;
}