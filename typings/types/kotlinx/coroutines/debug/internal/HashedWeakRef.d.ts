import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashedWeakRef<T extends unknown> extends WeakReference<T> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(ref: T, queue: ReferenceQueue<T> | null)
    hash: number;
}