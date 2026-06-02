import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { TickerMode } from '../../../kotlinx/coroutines/channels/TickerMode.d.ts'
export class TickerChannelsKt extends Object {
    static ticker(paramarg0: number, paramarg1: number, paramarg2: CoroutineContext, paramarg3: TickerMode): ReceiveChannel<void>;
}