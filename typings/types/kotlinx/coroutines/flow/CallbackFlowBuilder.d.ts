import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ChannelFlowBuilder } from '../../../kotlinx/coroutines/flow/ChannelFlowBuilder.d.ts'
import type { ChannelFlow } from '../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
export class CallbackFlowBuilder<T extends unknown> extends ChannelFlowBuilder<T> {
    constructor(block: (param0: ProducerScope<T>) => void, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow)
    // private block: (param0: ProducerScope<T>) => void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected collectTo(scope: ProducerScope<T>, $completion: Continuation<void>): any;
    protected create(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): ChannelFlow<T>;
}