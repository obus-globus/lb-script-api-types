import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { StateFlowImpl } from '../../../kotlinx/coroutines/flow/StateFlowImpl.d.ts'
import type { AbstractSharedFlowSlot } from '../../../kotlinx/coroutines/flow/internal/AbstractSharedFlowSlot.d.ts'
export class StateFlowSlot extends AbstractSharedFlowSlot<StateFlowImpl<Object>> {
    constructor()
    // private _state: AtomicReference<Object>;
    allocateLocked(flow: StateFlowImpl<Object>): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    awaitPending($completion: Continuation<void>): any;
    freeLocked(flow: StateFlowImpl<Object>): (Continuation<void> | null)[];
    makePending(): void;
    takePending(): boolean;
}