import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Middleware } from '../../../../../net/ccbluex/netty/http/middleware/Middleware.d.ts'
export interface Middleware$OnWebSocketUpgrade extends Object, Middleware{
    invoke(ctx: ChannelHandlerContext, request: HttpRequest): FullHttpResponse | null;
}