import type { ByteWriteChannel } from '../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ObjectPool } from '../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ChannelConfig } from '../../../io/ktor/websocket/ChannelConfig.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Serializer } from '../../../io/ktor/websocket/Serializer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class WebSocketWriter extends Object implements CoroutineScope {
    constructor(writeChannel: ByteWriteChannel, coroutineContext: CoroutineContext, masking: boolean, pool: ObjectPool<ByteBuffer>, queueConfig: ChannelConfig)
    readonly coroutineContext: CoroutineContext;
    masking: boolean;
    readonly outgoing: SendChannel<Frame>;
    readonly pool: ObjectPool<ByteBuffer>;
    // private queue: Channel<Object>;
    // private serializer: Serializer;
    // private writeChannel: ByteWriteChannel;
    // private writeLoopJob: Job;
    // private drainQueueAndDiscard(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private drainQueueAndSerialize(firstMsg: Frame, buffer: ByteBuffer, $completion: Continuation<boolean>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(frame: Frame, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private writeLoop(buffer: ByteBuffer, $completion: Continuation<void>): any;
}