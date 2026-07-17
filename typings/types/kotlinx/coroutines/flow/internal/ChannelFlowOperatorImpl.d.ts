import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { ChannelFlow } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
import type { ChannelFlowOperator } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlowOperator.d.ts'
export class ChannelFlowOperatorImpl<T extends unknown> extends ChannelFlowOperator<T, T> {
    constructor(flow: Flow<T>, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow)
    protected create(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): ChannelFlow<T>;
    dropChannelOperators(): Flow<T>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected flowCollect(collector: FlowCollector<T>, $completion: Continuation<void>): any;
}