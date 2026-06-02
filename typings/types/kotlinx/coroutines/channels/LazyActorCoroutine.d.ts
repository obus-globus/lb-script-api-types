import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
import type { ActorCoroutine } from '../../../kotlinx/coroutines/channels/ActorCoroutine.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause2 } from '../../../kotlinx/coroutines/selects/SelectClause2.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class LazyActorCoroutine<E extends Object | number | string | boolean> extends ActorCoroutine<E> {
    static BUFFERED: number;
    static CONFLATED: number;
    static DEFAULT_BUFFER_PROPERTY_NAME: string;
    static Factory: Channel$Factory;
    static Key: Job$Key;
    static OPTIONAL_CHANNEL: number;
    static RENDEZVOUS: number;
    static UNLIMITED: number;
    constructor(parentContext: CoroutineContext, channel: Channel<E>, block: Function2<Object, Object, Object>)
    // private continuation: Continuation<void>;
    readonly onSend: SelectClause2<E, SendChannel<E>>;
    close(cause: Throwable | null): boolean;
    offer(element: E): boolean;
    // private onSendRegFunction(select: SelectInstance<Object>, element: Object | null): void;
    protected onStart(): void;
    send(element: E): void;
    trySend(element: E): ChannelResult<void>;
}