import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ConcurrentWeakMap$Entry<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor(key: K, value: V)
    readonly key: K;
    readonly value: V;
    setValue(newValue: V): V;
}