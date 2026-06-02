import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { WriteTimeoutHandler$WriteTimeoutTask } from '../../../../io/netty/handler/timeout/WriteTimeoutHandler$WriteTimeoutTask.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WriteTimeoutHandler extends ChannelOutboundHandlerAdapter {
    constructor(arg0: number)
    constructor(arg0: number, arg1: TimeUnit)
    // private closed: boolean;
    // private lastTask: WriteTimeoutHandler$WriteTimeoutTask;
    // private timeoutNanos: number;
    // private addWriteTimeoutTask(arg0: WriteTimeoutHandler$WriteTimeoutTask): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    // private removeWriteTimeoutTask(arg0: WriteTimeoutHandler$WriteTimeoutTask): void;
    // private scheduleTimeout(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    writeTimedOut(arg0: ChannelHandlerContext): void;
}