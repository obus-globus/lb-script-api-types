import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { IdleStateHandler$AbstractIdleTask } from '../../../../io/netty/handler/timeout/IdleStateHandler$AbstractIdleTask.d.ts'
export class IdleStateHandler$ReaderIdleTimeoutTask extends IdleStateHandler$AbstractIdleTask {
    constructor(null_: IdleStateHandler$ReaderIdleTimeoutTask, arg1: ChannelHandlerContext)
    run(): void;
    run(arg0: ChannelHandlerContext): void;
}