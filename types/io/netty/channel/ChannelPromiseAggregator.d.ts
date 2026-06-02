import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { PromiseAggregator } from '../../../io/netty/util/concurrent/PromiseAggregator.d.ts'
export class ChannelPromiseAggregator extends PromiseAggregator<void, ChannelFuture> implements ChannelFutureListener {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    constructor(arg0: ChannelPromise)
}