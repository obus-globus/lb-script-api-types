import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AbstractCoroutine } from '../../../kotlinx/coroutines/AbstractCoroutine.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelIterator } from '../../../kotlinx/coroutines/channels/ChannelIterator.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause1 } from '../../../kotlinx/coroutines/selects/SelectClause1.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
export class ChannelCoroutine<E extends unknown> extends AbstractCoroutine<void> implements Channel<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static Key: Job$Key;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(parentContext: CoroutineContext, _channel: Channel<E>, initParentJob: boolean, active: boolean)
    // private _channel: Channel<E>;
    // private /*not mapped: */ get_channel(): Channel<E>;
    readonly channel: Channel<E>;
    /*not mapped: */ isClosedForReceive(): boolean;
    /*not mapped: */ isClosedForSend(): boolean;
    /*not mapped: */ isEmpty(): boolean;
    readonly onReceive: SelectClause1<E>;
    readonly onReceiveCatching: SelectClause1<ChannelResult<E>>;
    readonly onReceiveOrNull: SelectClause1<E>;
    readonly onSend: SelectClause2<E, SendChannel<E>>;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    cancelInternal(cause: Throwable): void;
    close(cause: Throwable | null): boolean;
    invokeOnClose(handler: (param0: Throwable | null) => void): void;
    iterator(): ChannelIterator<E>;
    offer(element: E): boolean;
    poll(): E | null;
    receive(): E;
    receiveCatching(): ChannelResult<E>;
    receiveOrNull(): E | null;
    send(element: E): void;
    tryReceive(): ChannelResult<E>;
    trySend(element: E): ChannelResult<void>;
}