import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class ActorSelectorManager$ContinuationHolder<R extends unknown, C extends Continuation<R>> extends Object {
    constructor()
    // private ref: AtomicReference<C>;
    resume(value: R): boolean;
    suspendIf(continuation: C, condition: () => boolean): Object | null;
}