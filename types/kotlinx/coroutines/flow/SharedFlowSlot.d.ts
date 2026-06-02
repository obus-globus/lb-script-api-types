import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { SharedFlowImpl } from '../../../kotlinx/coroutines/flow/SharedFlowImpl.d.ts'
import type { AbstractSharedFlowSlot } from '../../../kotlinx/coroutines/flow/internal/AbstractSharedFlowSlot.d.ts'
export class SharedFlowSlot extends AbstractSharedFlowSlot<SharedFlowImpl<Object>> {
    constructor()
    cont: Continuation<void> | null;
    index: number;
    allocateLocked(flow: SharedFlowImpl<Object>): boolean;
    freeLocked(flow: SharedFlowImpl<Object>): (Continuation<void> | null)[];
}