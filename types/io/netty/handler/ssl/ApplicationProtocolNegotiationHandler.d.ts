import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class ApplicationProtocolNegotiationHandler extends ChannelInboundHandlerAdapter {
    constructor(arg0: string)
    // private bufferedMessages: (Object | null)[];
    // private ctx: ChannelHandlerContext;
    // private fallbackProtocol: string;
    // private sslHandlerChecked: boolean;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    configurePipeline(arg0: ChannelHandlerContext, arg1: string): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private fireBufferedMessages(): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    handshakeFailure(arg0: ChannelHandlerContext, arg1: Throwable): void;
    // private removeSelfIfPresent(arg0: ChannelHandlerContext): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}