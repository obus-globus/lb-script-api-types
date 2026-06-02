import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export abstract class AbstractSharedFlowSlot<F extends Object | number | string | boolean> extends Object {
    constructor()
    allocateLocked(flow: F): boolean;
    freeLocked(flow: F): (Continuation<void> | null)[];
}