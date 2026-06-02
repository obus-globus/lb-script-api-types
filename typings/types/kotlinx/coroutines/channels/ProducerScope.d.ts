import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export interface ProducerScope<E extends Object | number | string | boolean> extends Object, CoroutineScope, SendChannel<E>{
    readonly channel: SendChannel<E>;
    offer(element: E): boolean;
}