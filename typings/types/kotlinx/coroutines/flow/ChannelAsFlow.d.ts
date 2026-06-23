import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicBoolean } from '../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { ChannelFlow } from '../../../kotlinx/coroutines/flow/internal/ChannelFlow.d.ts'
export class ChannelAsFlow<T extends unknown> extends ChannelFlow<T> {
    constructor(channel: ReceiveChannel<T>, consume: boolean, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow)
    protected additionalToStringProps(): string;
    collect(collector: FlowCollector<T>): void;
    protected collectTo(scope: ProducerScope<T>): void;
    protected create(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): ChannelFlow<T>;
    dropChannelOperators(): Flow<T>;
    // private markConsumed(): void;
    produceImpl(scope: CoroutineScope): ReceiveChannel<T>;
}