import type { ReferenceQueue } from '../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WeakIdentityHashMap$ObjectReference extends WeakReference<Object> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: Object, queue: ReferenceQueue<Object>)
    // private hash: number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}