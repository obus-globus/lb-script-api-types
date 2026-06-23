import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { SoftReference } from '../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$SoftValueReference<K extends unknown, V extends unknown> extends SoftReference<V> implements LocalCache$ValueReference<K, V> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(queue: ReferenceQueue<V>, referent: V, entry: ReferenceEntry<K, V>)
    readonly entry: ReferenceEntry<K, V>;
    copyFor(queue: ReferenceQueue<V>, value: V, entry: ReferenceEntry<K, V>): LocalCache$ValueReference<K, V>;
    getEntry(): ReferenceEntry<K, V>;
    getWeight(): number;
    isActive(): boolean;
    isLoading(): boolean;
    notifyNewValue(newValue: V): void;
    waitForValue(): V;
}