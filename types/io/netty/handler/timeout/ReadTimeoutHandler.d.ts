import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { IdleStateEvent } from '../../../../io/netty/handler/timeout/IdleStateEvent.d.ts'
import type { IdleStateHandler } from '../../../../io/netty/handler/timeout/IdleStateHandler.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
export class ReadTimeoutHandler extends IdleStateHandler {
    constructor(arg0: number)
    constructor(arg0: number, arg1: TimeUnit)
    // private closed: boolean;
    channelIdle(arg0: ChannelHandlerContext, arg1: IdleStateEvent): void;
    readTimedOut(arg0: ChannelHandlerContext): void;
}