import type { FinalizableReference } from '../../../../com/google/common/base/FinalizableReference.d.ts'
import type { FinalizableReferenceQueue } from '../../../../com/google/common/base/FinalizableReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FinalizableWeakReference<T extends Object | number | string | boolean> extends WeakReference<T> implements FinalizableReference {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: T, queue: FinalizableReferenceQueue)
}