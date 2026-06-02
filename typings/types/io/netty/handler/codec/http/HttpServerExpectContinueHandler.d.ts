import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpServerExpectContinueHandler extends ChannelInboundHandlerAdapter {
    constructor()
    acceptMessage(arg0: HttpRequest): HttpResponse;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    rejectResponse(arg0: HttpRequest): HttpResponse;
}