import type { FinalizableReference } from '../../../../com/google/common/base/FinalizableReference.d.ts'
import type { FinalizableReferenceQueue } from '../../../../com/google/common/base/FinalizableReferenceQueue.d.ts'
import type { SoftReference } from '../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FinalizableSoftReference<T extends unknown> extends SoftReference<T> implements FinalizableReference {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: T, queue: FinalizableReferenceQueue)
    finalizeReferent(): void;
}