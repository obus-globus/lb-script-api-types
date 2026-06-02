import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface LinkedImmutableMap$LinkedEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object, Map$Entry<K, V>{
    getNextKey(): K;
    getPrevKey(): K;
    withNextKey(nextKey: K): LinkedImmutableMap$LinkedEntry<K, V>;
    withPrevKey(prevKey: K): LinkedImmutableMap$LinkedEntry<K, V>;
    withValue(value: V): LinkedImmutableMap$LinkedEntry<K, V>;
}