import type { CloseReason } from '../../../io/ktor/websocket/CloseReason.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Frame$Ping } from '../../../io/ktor/websocket/Frame$Ping.d.ts'
import type { Frame$Pong } from '../../../io/ktor/websocket/Frame$Pong.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class PingPongKt extends Object {
    static pinger(self: CoroutineScope, outgoing: SendChannel<Frame>, periodMillis: number, timeoutMillis: number, onTimeout: (param0: CloseReason) => void): SendChannel<Frame$Pong>;
    static ponger(self: CoroutineScope, outgoing: SendChannel<Frame$Pong>): SendChannel<Frame$Ping>;
}