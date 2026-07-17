import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Relation$SimpleEntry<K extends unknown, V extends unknown> extends Object implements Map$Entry<K, V> {
    constructor(arg0: K, arg1: V)
    constructor(arg0: Map$Entry<K, V>)
    key: K;
    readonly key: K;
    value: V;
    readonly value: V;
    setValue(arg0: V): V;
}