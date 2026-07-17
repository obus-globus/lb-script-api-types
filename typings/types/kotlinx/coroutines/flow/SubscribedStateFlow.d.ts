import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class SubscribedStateFlow<T extends unknown> extends Object implements StateFlow<T> {
    constructor(stateFlow: StateFlow<T>, action: (param0: FlowCollector<T>) => void)
    // private action: (param0: FlowCollector<T>) => void;
    readonly replayCache: T[];
    // private stateFlow: StateFlow<T>;
    readonly value: T;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    collect(collector: FlowCollector<T>, $completion: Continuation<void>): any;
}