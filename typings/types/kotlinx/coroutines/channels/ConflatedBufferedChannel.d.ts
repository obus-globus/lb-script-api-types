import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { BufferedChannel } from '../../../kotlinx/coroutines/channels/BufferedChannel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class ConflatedBufferedChannel<E extends unknown> extends BufferedChannel<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(capacity: number, onBufferOverflow: BufferOverflow, onUndeliveredElement: ((param0: E) => void) | null)
    // private capacity: number;
    // private /*not mapped: */ isConflatedDropOldest(): boolean;
    // private onBufferOverflow: BufferOverflow;
    protected registerSelectForSend(select: SelectInstance<Object>, element: Object | null): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(element: E, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    sendBroadcast(element: E, $completion: Continuation<boolean>): any;
    shouldSendSuspend(): boolean;
    trySend(element: E): ChannelResult<void>;
    // private trySendDropLatest(element: E, isSendOp: boolean): ChannelResult<void>;
    // private trySendDropOldest(element: E): ChannelResult<void>;
    // private trySendImpl(element: E, isSendOp: boolean): ChannelResult<void>;
}