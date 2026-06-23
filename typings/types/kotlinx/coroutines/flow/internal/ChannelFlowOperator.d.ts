import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { ChannelFlow } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
export abstract class ChannelFlowOperator<S extends unknown, T extends unknown> extends ChannelFlow<T> {
    constructor(flow: Flow<S>, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow)
    // private flow: Flow<S>;
    collect(collector: FlowCollector<T>): void;
    protected collectTo(scope: ProducerScope<T>): void;
    // private collectWithContextUndispatched(collector: FlowCollector<T>, newContext: CoroutineContext): void;
    protected flowCollect(collector: FlowCollector<T>): void;
    toString(): string;
}