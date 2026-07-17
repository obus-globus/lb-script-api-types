import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { BufferOverflow } from '../../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { FusibleFlow } from '../../../../kotlinx/coroutines/flow/internal/FusibleFlow.d.ts'
export abstract class ChannelFlow<T extends unknown> extends Object implements FusibleFlow<T> {
    constructor(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow)
    capacity: number;
    /*not mapped: */ getCollectToFun$kotlinx_coroutines_core(): (param0: ProducerScope<T>) => void;
    context: CoroutineContext;
    onBufferOverflow: BufferOverflow;
    /*not mapped: */ getProduceCapacity$kotlinx_coroutines_core(): number;
    protected additionalToStringProps(): string | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    collect(collector: FlowCollector<T>, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected collectTo(scope: ProducerScope<T>, $completion: Continuation<void>): any;
    protected create(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): ChannelFlow<T>;
    dropChannelOperators(): Flow<T> | null;
    fuse(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
    produceImpl(scope: CoroutineScope): ReceiveChannel<T>;
    toString(): string;
}