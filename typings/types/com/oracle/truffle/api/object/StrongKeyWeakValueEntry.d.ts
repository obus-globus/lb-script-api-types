import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class StrongKeyWeakValueEntry<K extends unknown, V extends unknown> extends WeakReference<V> implements Map$Entry<K, V> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(key: K, value: V)
    constructor(key: K, value: V, queue: ReferenceQueue<V>)
    readonly key: K;
    readonly key: K;
    readonly value: V;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    setValue(value: V): V;
    toString(): string;
}