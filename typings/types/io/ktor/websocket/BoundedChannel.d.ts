import type { BoundedChannel$Companion } from '../../../io/ktor/websocket/BoundedChannel$Companion.d.ts'
import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelIterator } from '../../../kotlinx/coroutines/channels/ChannelIterator.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause1 } from '../../../kotlinx/coroutines/selects/SelectClause1.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
export class BoundedChannel<T extends unknown> extends Object implements Channel<T> {
    static BUFFERED: number;
    static CONFLATED: number;
    static Companion: BoundedChannel$Companion;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(capacity: number, delegate: Channel<T>)
    // private delegate: Channel<T>;
    /*not mapped: */ isClosedForReceive(): boolean;
    /*not mapped: */ isClosedForSend(): boolean;
    /*not mapped: */ isEmpty(): boolean;
    readonly onReceive: SelectClause1<T>;
    readonly onReceiveCatching: SelectClause1<ChannelResult<T>>;
    readonly onReceiveOrNull: SelectClause1<T>;
    readonly onSend: SelectClause2<T, SendChannel<T>>;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    close(cause: Throwable | null): boolean;
    invokeOnClose(handler: (param0: Throwable | null) => void): void;
    iterator(): ChannelIterator<T>;
    offer(element: T): boolean;
    poll(): T | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receive($completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveCatching($completion: Continuation<ChannelResult<T>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveOrNull($completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(element: T, $completion: Continuation<void>): any;
    tryReceive(): ChannelResult<T>;
    trySend(element: T): ChannelResult<void>;
}