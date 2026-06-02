import type { Object } from '../../../java/lang/Object.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export interface Channel<E extends Object | number | string | boolean> extends Object, ReceiveChannel<E>, SendChannel<E>{
    cancel(): void;
    offer(element: E): boolean;
    poll(): E | null;
    receiveOrNull(): E | null;
}