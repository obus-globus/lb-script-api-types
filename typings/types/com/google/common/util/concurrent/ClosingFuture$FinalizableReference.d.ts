import type { FinalizablePhantomReference } from '../../../../../com/google/common/base/FinalizablePhantomReference.d.ts'
import type { ClosingFuture } from '../../../../../com/google/common/util/concurrent/ClosingFuture.d.ts'
import type { ClosingFuture$State } from '../../../../../com/google/common/util/concurrent/ClosingFuture$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$FinalizableReference extends FinalizablePhantomReference<ClosingFuture<Object>> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: ClosingFuture<Object>)
    // private state: ClosingFuture$State<Object>;
    finalizeReferent(): void;
}