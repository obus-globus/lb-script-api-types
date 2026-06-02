import type { LocalCache$SoftValueReference } from '../../../../com/google/common/cache/LocalCache$SoftValueReference.d.ts'
import type { LocalCache$ValueReference } from '../../../../com/google/common/cache/LocalCache$ValueReference.d.ts'
import type { ReferenceEntry } from '../../../../com/google/common/cache/ReferenceEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalCache$WeightedSoftValueReference<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LocalCache$SoftValueReference<K, V> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(queue: ReferenceQueue<V>, referent: V, entry: ReferenceEntry<K, V>, weight: number)
    readonly weight: number;
    copyFor(queue: ReferenceQueue<V>, value: V, entry: ReferenceEntry<K, V>): LocalCache$ValueReference<K, V>;
    getWeight(): number;
}