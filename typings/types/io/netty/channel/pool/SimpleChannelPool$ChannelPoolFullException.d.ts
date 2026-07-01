import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelInitializer } from '../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SimpleChannelPool$ChannelPoolFullException extends IllegalStateException {
    constructor(arg0: ChannelInitializer<Channel>)
    fillInStackTrace(): Throwable;
}