import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { DefaultChannelPipeline$PendingHandlerCallback } from '../../../io/netty/channel/DefaultChannelPipeline$PendingHandlerCallback.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultChannelPipeline$PendingHandlerAddedTask extends DefaultChannelPipeline$PendingHandlerCallback {
    constructor(null_: (Object | null)[], arg1: AbstractChannelHandlerContext)
    execute(): void;
    run(): void;
}