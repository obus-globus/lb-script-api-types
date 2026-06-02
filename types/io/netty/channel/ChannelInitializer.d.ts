import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class ChannelInitializer<C extends Channel> extends ChannelInboundHandlerAdapter {
    constructor()
    // private initMap: ChannelHandlerContext[];
    channelRegistered(arg0: ChannelHandlerContext): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    initChannel(arg0: C): void;
    // private initChannel(arg0: ChannelHandlerContext): boolean;
    // private removeState(arg0: ChannelHandlerContext): void;
}