import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { CompleteChannelFuture } from '../../../io/netty/channel/CompleteChannelFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class FailedChannelFuture extends CompleteChannelFuture {
    constructor(arg0: Channel, arg1: (Object | null)[], arg2: Throwable)
    // private cause: Throwable;
    cause(): Throwable;
    isSuccess(): boolean;
    sync(): ChannelFuture;
    syncUninterruptibly(): ChannelFuture;
}