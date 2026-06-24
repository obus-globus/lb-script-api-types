import type { ProxyHandler$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ProxyHandler } from '../../../../io/netty/handler/proxy/ProxyHandler.d.ts'
import type { DefaultPromise } from '../../../../io/netty/util/concurrent/DefaultPromise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProxyHandler$LazyChannelPromise extends DefaultPromise<Channel> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    private constructor(null_: ProxyHandler)
    constructor(null_: ProxyHandler, arg1: ProxyHandler$1)
    executor(): (Object | null)[];
}