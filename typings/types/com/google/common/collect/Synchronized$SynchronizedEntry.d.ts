import type { Synchronized$SynchronizedObject } from '../../../../com/google/common/collect/Synchronized$SynchronizedObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Synchronized$SynchronizedEntry<K extends unknown, V extends unknown> extends Synchronized$SynchronizedObject implements Map$Entry<K, V> {
    constructor(delegate: Map$Entry<K, V>, mutex: Object)
    readonly key: K;
    readonly value: V;
    delegate(): Map$Entry<K, V>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    setValue(value: V): V;
}