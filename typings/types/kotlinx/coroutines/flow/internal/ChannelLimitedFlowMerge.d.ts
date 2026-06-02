import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { BufferOverflow } from '../../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { ChannelFlow } from '../../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
export class ChannelLimitedFlowMerge<T extends Object | number | string | boolean> extends ChannelFlow<T> {
    constructor(flows: Flow<T>[], context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow)
    // private flows: Flow<T>[];
    protected collectTo(scope: ProducerScope<T>): void;
    protected create(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): ChannelFlow<T>;
    produceImpl(scope: CoroutineScope): ReceiveChannel<T>;
}