import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export interface BroadcastChannel<E extends Object | number | string | boolean> extends Object, SendChannel<E>{
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    offer(element: E): boolean;
    openSubscription(): ReceiveChannel<E>;
}