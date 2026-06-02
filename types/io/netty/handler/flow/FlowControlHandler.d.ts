import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FlowControlHandler extends ChannelDuplexHandler {
    constructor()
    constructor(arg0: boolean)
    // private config: ChannelConfig;
    // private queue: (Object | null)[];
    // private releaseMessages: boolean;
    // private shouldConsume: boolean;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    // private dequeue(arg0: ChannelHandlerContext, arg1: number): number;
    // private destroy(): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    isQueueEmpty(): boolean;
    read(arg0: ChannelHandlerContext): void;
}