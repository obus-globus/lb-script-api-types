import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export interface ActorScope<E extends Object | number | string | boolean> extends Object, CoroutineScope, ReceiveChannel<E>{
    readonly channel: Channel<E>;
    cancel(): void;
    poll(): E | null;
    receiveOrNull(): E | null;
}