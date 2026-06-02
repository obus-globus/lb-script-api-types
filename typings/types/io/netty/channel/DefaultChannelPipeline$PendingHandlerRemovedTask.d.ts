import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { DefaultChannelPipeline$PendingHandlerCallback } from '../../../io/netty/channel/DefaultChannelPipeline$PendingHandlerCallback.d.ts'
export class DefaultChannelPipeline$PendingHandlerRemovedTask extends DefaultChannelPipeline$PendingHandlerCallback {
    constructor(null_: DefaultChannelPipeline$PendingHandlerRemovedTask, arg1: AbstractChannelHandlerContext)
    execute(): void;
    run(): void;
}