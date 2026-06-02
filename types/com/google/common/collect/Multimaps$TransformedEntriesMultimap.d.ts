import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { Maps$EntryTransformer } from '../../../../com/google/common/collect/Maps$EntryTransformer.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Multimaps$TransformedEntriesMultimap<K extends Object | number | string | boolean, V1 extends Object | number | string | boolean, V2 extends Object | number | string | boolean> extends AbstractMultimap<K, V2> {
    constructor(fromMultimap: Multimap<K, V1>, transformer: (param0: K, param1: V1) => V2)
    // private fromMultimap: Multimap<K, V1>;
    // private transformer: (param0: K, param1: V1) => V2;
    clear(): void;
    containsKey(key: Object): boolean;
    createAsMap(): Map<K, E[]>;
    createEntries(): E[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): E[];
    entryIterator(): Iterator<Map$Entry<K, V2>>;
    get(key: K): E[];
    isEmpty(): boolean;
    put(key: K, value: V2): boolean;
    putAll(key: K, values: V2[]): boolean;
    putAll(multimap: Multimap<K, V2>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): E[];
    replaceValues(key: K, values: V2[]): E[];
    size(): number;
    transform(key: K, values: E[]): E[];
}