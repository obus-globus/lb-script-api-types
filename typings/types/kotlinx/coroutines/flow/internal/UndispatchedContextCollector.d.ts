import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class UndispatchedContextCollector<T extends unknown> extends Object implements FlowCollector<T> {
    constructor(downstream: FlowCollector<T>, emitContext: CoroutineContext)
    // private countOrElement: Object;
    // private emitContext: CoroutineContext;
    // private emitRef: (param0: T) => void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    emit(value: T, $completion: Continuation<void>): any;
}