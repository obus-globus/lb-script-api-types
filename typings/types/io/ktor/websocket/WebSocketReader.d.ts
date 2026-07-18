import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ObjectPool } from '../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ChannelConfig } from '../../../io/ktor/websocket/ChannelConfig.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { FrameParser } from '../../../io/ktor/websocket/FrameParser.d.ts'
import type { SimpleFrameCollector } from '../../../io/ktor/websocket/SimpleFrameCollector.d.ts'
import type { WebSocketReader$State } from '../../../io/ktor/websocket/WebSocketReader$State.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class WebSocketReader extends Object implements CoroutineScope {
    constructor(byteChannel: ByteReadChannel, coroutineContext: CoroutineContext, maxFrameSize: number, pool: ObjectPool<ByteBuffer>, queueConfig: ChannelConfig)
    // private byteChannel: ByteReadChannel;
    // private collector: SimpleFrameCollector;
    readonly coroutineContext: CoroutineContext;
    // private frameParser: FrameParser;
    readonly incoming: ReceiveChannel<Frame>;
    maxFrameSize: number;
    // private queue: Channel<Frame>;
    // private state: WebSocketReader$State;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private handleFrameIfProduced($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private parseLoop(buffer: ByteBuffer, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private readLoop(buffer: ByteBuffer, $completion: Continuation<void>): any;
}