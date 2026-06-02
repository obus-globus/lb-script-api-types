import type { FinalizableReference } from '../../../../com/google/common/base/FinalizableReference.d.ts'
import type { FinalizableReferenceQueue } from '../../../../com/google/common/base/FinalizableReferenceQueue.d.ts'
import type { PhantomReference } from '../../../../java/lang/ref/PhantomReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FinalizablePhantomReference<T extends Object | number | string | boolean> extends PhantomReference<T> implements FinalizableReference {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: T, queue: FinalizableReferenceQueue)
}