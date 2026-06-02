import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { DefaultPromise } from '../../../../io/netty/util/concurrent/DefaultPromise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SslHandler$LazyChannelPromise extends DefaultPromise<Channel> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    private constructor(null_: SslHandler$LazyChannelPromise)
    checkDeadLock(): void;
    executor(): (Object | null)[];
}