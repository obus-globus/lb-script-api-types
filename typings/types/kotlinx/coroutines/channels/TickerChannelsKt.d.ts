import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { TickerMode } from '../../../kotlinx/coroutines/channels/TickerMode.d.ts'
export class TickerChannelsKt extends Object {
    static ticker(delayMillis: number, initialDelayMillis: number, context: CoroutineContext, mode: TickerMode): ReceiveChannel<void>;
}