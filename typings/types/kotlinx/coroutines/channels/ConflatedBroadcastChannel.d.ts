import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { BroadcastChannelImpl } from '../../../kotlinx/coroutines/channels/BroadcastChannelImpl.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
export class ConflatedBroadcastChannel<E extends Object | number | string | boolean> extends Object implements BroadcastChannel<E> {
    constructor()
    constructor(value: E)
    private constructor(broadcast: BroadcastChannelImpl<E>)
    // private broadcast: BroadcastChannelImpl<E>;
    /*not mapped: */ isClosedForSend(): boolean;
    readonly onSend: SelectClause2<E, SendChannel<E>>;
    readonly value: E;
    readonly valueOrNull: E | null;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    close(cause: Throwable | null): boolean;
    invokeOnClose(handler: (param0: Throwable | null) => void): void;
    offer(element: E): boolean;
    openSubscription(): ReceiveChannel<E>;
    send(element: E): void;
    trySend(element: E): ChannelResult<void>;
}