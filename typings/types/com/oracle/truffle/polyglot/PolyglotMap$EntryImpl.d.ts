import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class PolyglotMap$EntryImpl extends Object implements Map$Entry<K, V> {
    constructor(null_: JavaMap<Object, Object>, key: Object)
    readonly key: K;
    readonly key: K;
    readonly value: V;
    setValue<V extends unknown>(value: V): V;
    toString(): string;
}