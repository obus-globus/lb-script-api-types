import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AbstractCoroutine } from '../../../kotlinx/coroutines/AbstractCoroutine.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
export class BroadcastCoroutine<E extends Object | number | string | boolean> extends AbstractCoroutine<void> implements BroadcastChannel<E>, ProducerScope<E> {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, _channel: BroadcastChannel<E>, active: boolean)
    // private _channel: BroadcastChannel<E>;
    // private /*not mapped: */ get_channel(): BroadcastChannel<E>;
    readonly channel: SendChannel<E>;
    /*not mapped: */ isActive(): boolean;
    /*not mapped: */ isClosedForSend(): boolean;
    readonly onSend: SelectClause2<E, SendChannel<E>>;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    cancelInternal(cause: Throwable): void;
    close(cause: Throwable | null): boolean;
    invokeOnClose(handler: (param0: Throwable | null) => void): void;
    offer(element: E): boolean;
    protected onCancelled(cause: Throwable, handled: boolean): void;
    protected onCompleted(value: void): void;
    openSubscription(): ReceiveChannel<E>;
    send(element: E): void;
    trySend(element: E): ChannelResult<void>;
}