import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class DistinctFlowImpl<T extends unknown> extends Object implements Flow<T> {
    constructor(upstream: Flow<T>, keySelector: (param0: T) => Object | null, areEquivalent: (param0: Object | null, param1: Object | null) => boolean)
    areEquivalent: (param0: Object | null, param1: Object | null) => boolean;
    keySelector: (param0: T) => Object | null;
    // private upstream: Flow<T>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    collect(collector: FlowCollector<T>, $completion: Continuation<void>): any;
}