import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { HttpContentDecoder } from '../../../../../io/netty/handler/codec/http/HttpContentDecoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpContentDecoder$ByteBufForwarder extends ChannelInboundHandlerAdapter {
    constructor(null_: HttpContentDecoder, arg1: ChannelHandlerContext)
    // private targetCtx: ChannelHandlerContext;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    isSharable(): boolean;
}