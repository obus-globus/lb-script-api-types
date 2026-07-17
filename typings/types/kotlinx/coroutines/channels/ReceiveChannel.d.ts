import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { ChannelIterator } from '../../../kotlinx/coroutines/channels/ChannelIterator.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SelectClause1 } from '../../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export interface ReceiveChannel<E extends unknown> extends Object{
    /*not mapped: */ isClosedForReceive(): boolean;
    /*not mapped: */ isEmpty(): boolean;
    readonly onReceive: SelectClause1<E>;
    readonly onReceiveCatching: SelectClause1<ChannelResult<E>>;
    readonly onReceiveOrNull: SelectClause1<E>;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    iterator(): ChannelIterator<E>;
    poll(): E | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receive($completion: Continuation<E>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveCatching($completion: Continuation<ChannelResult<E>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveOrNull($completion: Continuation<E>): any;
    tryReceive(): ChannelResult<E>;
}