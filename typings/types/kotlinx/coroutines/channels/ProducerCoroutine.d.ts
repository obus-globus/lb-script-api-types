import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelCoroutine } from '../../../kotlinx/coroutines/channels/ChannelCoroutine.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
export class ProducerCoroutine<E extends Object | number | string | boolean> extends ChannelCoroutine<E> implements ProducerScope<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static Key: Job$Key;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(parentContext: CoroutineContext, channel: Channel<E>)
    /*not mapped: */ isActive(): boolean;
    protected onCancelled(cause: Throwable, handled: boolean): void;
    protected onCompleted(value: void): void;
}