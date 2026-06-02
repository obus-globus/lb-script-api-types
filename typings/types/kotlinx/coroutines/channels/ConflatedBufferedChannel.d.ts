import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { BufferedChannel } from '../../../kotlinx/coroutines/channels/BufferedChannel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class ConflatedBufferedChannel<E extends Object | number | string | boolean> extends BufferedChannel<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(capacity: number, onBufferOverflow: BufferOverflow, onUndeliveredElement: Function1<E, void> | null)
    // private capacity: number;
    // private /*not mapped: */ isConflatedDropOldest(): boolean;
    // private onBufferOverflow: BufferOverflow;
    protected registerSelectForSend(select: SelectInstance<Object>, element: Object | null): void;
    send(element: E): void;
    sendBroadcast(element: E): boolean;
    shouldSendSuspend(): boolean;
    trySend(element: E): ChannelResult<void>;
    // private trySendDropLatest(element: E, isSendOp: boolean): ChannelResult<void>;
    // private trySendImpl(element: E, isSendOp: boolean): ChannelResult<void>;
}