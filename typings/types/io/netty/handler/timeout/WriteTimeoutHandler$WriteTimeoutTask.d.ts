import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { WriteTimeoutHandler } from '../../../../io/netty/handler/timeout/WriteTimeoutHandler.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WriteTimeoutHandler$WriteTimeoutTask extends Object implements ChannelFutureListener, Runnable {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    constructor(null_: WriteTimeoutHandler, arg1: ChannelHandlerContext, arg2: ChannelPromise)
    // private ctx: ChannelHandlerContext;
    // private next: WriteTimeoutHandler$WriteTimeoutTask;
    // private prev: WriteTimeoutHandler$WriteTimeoutTask;
    // private promise: ChannelPromise;
    // private scheduledFuture: Future<Object>;
    operationComplete(arg0: ChannelFuture): void;
    run(): void;
}