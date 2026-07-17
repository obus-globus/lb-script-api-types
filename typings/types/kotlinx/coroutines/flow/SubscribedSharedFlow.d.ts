import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
export class SubscribedSharedFlow<T extends unknown> extends Object implements SharedFlow<T> {
    constructor(sharedFlow: SharedFlow<T>, action: (param0: FlowCollector<T>) => void)
    // private action: (param0: FlowCollector<T>) => void;
    readonly replayCache: T[];
    // private sharedFlow: SharedFlow<T>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    collect(collector: FlowCollector<T>, $completion: Continuation<void>): any;
}