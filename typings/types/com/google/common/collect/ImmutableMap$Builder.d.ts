import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableMap$Builder<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(initialCapacity: number)
    // private entries: Map$Entry<K, V>[];
    // private entriesUsed: boolean;
    // private size: number;
    // private valueComparator: (param0: Object) => boolean;
    build(): Map<K, V>;
    // private build(throwIfDuplicateKeys: boolean): Map<K, V>;
    buildJdkBacked(): Map<K, V>;
    buildKeepingLast(): Map<K, V>;
    buildOrThrow(): Map<K, V>;
    combine(other: ImmutableMap$Builder<K, V>): ImmutableMap$Builder<K, V>;
    // private ensureCapacity(minCapacity: number): void;
    orderEntriesByValue(valueComparator: (param0: Object) => boolean): ImmutableMap$Builder<K, V>;
    put(entry: Map$Entry<K, V>): ImmutableMap$Builder<K, V>;
    put(key: K, value: V): ImmutableMap$Builder<K, V>;
    putAll(map: Map<K, V>): ImmutableMap$Builder<K, V>;
    putAll(entries: Map$Entry<K, V>[]): ImmutableMap$Builder<K, V>;
}