import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { Maps$EntryTransformer } from '../../../../com/google/common/collect/Maps$EntryTransformer.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Multimaps$TransformedEntriesMultimap<K extends unknown, V1 extends unknown, V2 extends unknown> extends AbstractMultimap<K, V2> {
    constructor(fromMultimap: Multimap<K, V1>, transformer: (param0: K, param1: V1) => V2)
    // private fromMultimap: Multimap<K, V1>;
    // private transformer: (param0: K, param1: V1) => V2;
    clear(): void;
    containsKey(key: Object): boolean;
    createAsMap(): JavaMap<K, V2[]>;
    createEntries(): Map$Entry<K, V2>[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): V2[];
    entryIterator(): Iterator<Map$Entry<K, V2>>;
    get(key: K): V2[];
    isEmpty(): boolean;
    put(key: K, value: V2): boolean;
    putAll(key: K, values: V2[]): boolean;
    putAll(multimap: Multimap<K, V2>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): V2[];
    replaceValues(key: K, values: V2[]): V2[];
    size(): number;
    transform(key: K, values: V1[]): V2[];
}