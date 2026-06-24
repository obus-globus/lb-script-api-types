import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { BroadcastChannelImpl } from '../../../kotlinx/coroutines/channels/BroadcastChannelImpl.d.ts'
import type { BufferedChannel } from '../../../kotlinx/coroutines/channels/BufferedChannel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
export class BroadcastChannelImpl$SubscriberBuffered extends BufferedChannel<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(null_: BroadcastChannelImpl<E>)
    cancelImpl(cause: Throwable | null): boolean;
}