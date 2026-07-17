import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export interface MutableSharedFlow<T extends unknown> extends Object, FlowCollector<T>, SharedFlow<T>{
    readonly subscriptionCount: StateFlow<number>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    emit(value: T, $completion: Continuation<void>): any;
    resetReplayCache(): void;
    tryEmit(value: T): boolean;
}