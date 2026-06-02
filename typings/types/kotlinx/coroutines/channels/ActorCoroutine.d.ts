import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
import type { ActorScope } from '../../../kotlinx/coroutines/channels/ActorScope.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelCoroutine } from '../../../kotlinx/coroutines/channels/ChannelCoroutine.d.ts'
export class ActorCoroutine<E extends Object | number | string | boolean> extends ChannelCoroutine<E> implements ActorScope<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static Key: Job$Key;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(parentContext: CoroutineContext, channel: Channel<E>, active: boolean)
    protected handleJobException(exception: Throwable): boolean;
    protected onCancelling(cause: Throwable | null): void;
}