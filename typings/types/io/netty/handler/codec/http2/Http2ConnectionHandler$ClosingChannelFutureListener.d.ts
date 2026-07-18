import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Future } from '../../../../../io/netty/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2ConnectionHandler$ClosingChannelFutureListener extends Object implements ChannelFutureListener {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    constructor(arg0: ChannelHandlerContext, arg1: ChannelPromise)
    constructor(arg0: ChannelHandlerContext, arg1: ChannelPromise, arg2: number, arg3: TimeUnit)
    // private closed: boolean;
    // private ctx: ChannelHandlerContext;
    // private promise: ChannelPromise;
    // private timeoutTask: Future<Object>;
    // private doClose(): void;
    operationComplete(arg0: ChannelFuture): void;
}