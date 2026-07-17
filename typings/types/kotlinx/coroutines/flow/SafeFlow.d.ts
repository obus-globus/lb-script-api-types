import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { AbstractFlow } from '../../../kotlinx/coroutines/flow/AbstractFlow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class SafeFlow<T extends unknown> extends AbstractFlow<T> {
    constructor(block: (param0: FlowCollector<T>) => void)
    // private block: (param0: FlowCollector<T>) => void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    collectSafely(collector: FlowCollector<T>, $completion: Continuation<void>): any;
}