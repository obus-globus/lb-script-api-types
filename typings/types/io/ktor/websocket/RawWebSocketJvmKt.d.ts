import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { WebSocketChannelsConfig } from '../../../io/ktor/websocket/WebSocketChannelsConfig.d.ts'
import type { WebSocketSession } from '../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
export class RawWebSocketJvmKt extends Object {
    static RawWebSocket(input: ByteReadChannel, output: ByteWriteChannel, maxFrameSize: number, masking: boolean, coroutineContext: CoroutineContext): WebSocketSession;
    static RawWebSocket(input: ByteReadChannel, output: ByteWriteChannel, maxFrameSize: number, masking: boolean, coroutineContext: CoroutineContext, channelsConfig: WebSocketChannelsConfig): WebSocketSession;
}