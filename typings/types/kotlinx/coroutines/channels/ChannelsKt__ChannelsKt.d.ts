import type { Object } from '../../../java/lang/Object.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class ChannelsKt__ChannelsKt extends Object {
    static sendBlocking(paramarg0: SendChannel<Object>, paramarg1: Object): void;
    static trySendBlocking<E extends unknown>(paramarg0: SendChannel<Object>, paramarg1: E): Object;
}