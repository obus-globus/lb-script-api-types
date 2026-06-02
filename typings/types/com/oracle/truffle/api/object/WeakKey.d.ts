import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WeakKey<K extends Object | number | string | boolean> extends WeakReference<K> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(key: K)
    constructor(key: K, q: ReferenceQueue<K>)
    // private hashCode: number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}