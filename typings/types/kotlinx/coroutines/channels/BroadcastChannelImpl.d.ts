import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { BufferedChannel } from '../../../kotlinx/coroutines/channels/BufferedChannel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class BroadcastChannelImpl<E extends unknown> extends BufferedChannel<E> implements BroadcastChannel<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(capacity: number)
    readonly capacity: number;
    /*not mapped: */ isClosedForSend(): boolean;
    // private lastConflatedElement: Object | null;
    // private lock: ReentrantLock;
    // private onSendInternalResult: Map<SelectInstance<Object>, Object | null>;
    // private subscribers: BufferedChannel<E>[];
    readonly value: E;
    readonly valueOrNull: E | null;
    cancelImpl(cause: Throwable | null): boolean;
    close(cause: Throwable | null): boolean;
    openSubscription(): ReceiveChannel<E>;
    protected registerSelectForSend(select: SelectInstance<Object>, element: Object | null): void;
    // private removeSubscriber(s: ReceiveChannel<E>): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(element: E, $completion: Continuation<void>): any;
    toString(): string;
    trySend(element: E): ChannelResult<void>;
}