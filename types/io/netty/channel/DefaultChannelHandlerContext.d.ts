import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultChannelHandlerContext extends AbstractChannelHandlerContext {
    constructor(arg0: (Object | null)[], arg1: (Object | null)[], arg2: string, arg3: ChannelHandler)
    // private handler: ChannelHandler;
    handler(): ChannelHandler;
}