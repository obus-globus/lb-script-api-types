import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
export class DisconnectHandler extends ChannelOutboundHandlerAdapter {
    static NAME: string;
    constructor()
    // private calledDisconnect: boolean;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
}