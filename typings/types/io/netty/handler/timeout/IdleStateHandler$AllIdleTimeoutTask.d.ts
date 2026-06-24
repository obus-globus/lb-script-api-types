import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { IdleStateHandler } from '../../../../io/netty/handler/timeout/IdleStateHandler.d.ts'
import type { IdleStateHandler$AbstractIdleTask } from '../../../../io/netty/handler/timeout/IdleStateHandler$AbstractIdleTask.d.ts'
export class IdleStateHandler$AllIdleTimeoutTask extends IdleStateHandler$AbstractIdleTask {
    constructor(null_: IdleStateHandler, arg1: ChannelHandlerContext)
    run(): void;
    run(arg0: ChannelHandlerContext): void;
}