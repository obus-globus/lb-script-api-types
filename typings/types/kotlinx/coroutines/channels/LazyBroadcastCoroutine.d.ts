import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { BroadcastCoroutine } from '../../../kotlinx/coroutines/channels/BroadcastCoroutine.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class LazyBroadcastCoroutine<E extends Object | number | string | boolean> extends BroadcastCoroutine<E> {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, channel: BroadcastChannel<E>, block: (param0: ProducerScope<E>) => void)
    // private continuation: Continuation<void>;
    protected onStart(): void;
    openSubscription(): ReceiveChannel<E>;
}