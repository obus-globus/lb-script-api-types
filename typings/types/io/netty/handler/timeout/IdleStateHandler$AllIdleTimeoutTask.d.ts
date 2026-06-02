import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { IdleStateHandler$AbstractIdleTask } from '../../../../io/netty/handler/timeout/IdleStateHandler$AbstractIdleTask.d.ts'
export class IdleStateHandler$AllIdleTimeoutTask extends IdleStateHandler$AbstractIdleTask {
    constructor(null_: IdleStateHandler$AllIdleTimeoutTask, arg1: ChannelHandlerContext)
    run(arg0: ChannelHandlerContext): void;
}