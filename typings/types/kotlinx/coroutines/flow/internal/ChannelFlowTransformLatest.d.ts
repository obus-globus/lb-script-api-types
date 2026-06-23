import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { ChannelFlow } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
import type { ChannelFlowOperator } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlowOperator.d.ts'
export class ChannelFlowTransformLatest<T extends unknown, R extends unknown> extends ChannelFlowOperator<T, R> {
    constructor(transform: (param0: FlowCollector<R>, param1: T) => void, flow: Flow<T>, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow)
    // private transform: (param0: FlowCollector<R>, param1: T) => void;
    protected create(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): ChannelFlow<R>;
    protected flowCollect(collector: FlowCollector<R>): void;
}