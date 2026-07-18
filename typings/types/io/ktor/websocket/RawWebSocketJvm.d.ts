import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ObjectPool } from '../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketChannelsConfig } from '../../../io/ktor/websocket/WebSocketChannelsConfig.d.ts'
import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { WebSocketReader } from '../../../io/ktor/websocket/WebSocketReader.d.ts'
import type { WebSocketSession } from '../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { WebSocketWriter } from '../../../io/ktor/websocket/WebSocketWriter.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableJob } from '../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class RawWebSocketJvm extends Object implements WebSocketSession {
    constructor(input: ByteReadChannel, output: ByteWriteChannel, maxFrameSize: number, masking: boolean, coroutineContext: CoroutineContext, channelsConfig: WebSocketChannelsConfig, pool: ObjectPool<ByteBuffer>)
    readonly coroutineContext: CoroutineContext;
    readonly extensions: WebSocketExtension<Object>[];
    // private filtered: Channel<Frame>;
    readonly incoming: ReceiveChannel<Frame>;
    masking: boolean;
    maxFrameSize: number;
    readonly outgoing: SendChannel<Frame>;
    // private reader: WebSocketReader;
    /*not mapped: */ getReader$ktor_websockets(): WebSocketReader;
    // private socketJob: CompletableJob;
    // private writer: WebSocketWriter;
    /*not mapped: */ getWriter$ktor_websockets(): WebSocketWriter;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(frame: Frame, $completion: Continuation<void>): any;
    terminate(): void;
}