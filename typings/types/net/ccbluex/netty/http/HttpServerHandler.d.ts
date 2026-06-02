import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { ThreadLocal } from '../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { HttpServer } from '../../../../net/ccbluex/netty/http/HttpServer.d.ts'
import type { RequestContext } from '../../../../net/ccbluex/netty/http/model/RequestContext.d.ts'
export class HttpServerHandler extends ChannelInboundHandlerAdapter {
    constructor(server: HttpServer)
    // private channelScope: CoroutineScope;
    // private localRequestContext: ThreadLocal<RequestContext>;
    // private server: HttpServer;
    channelRead(ctx: ChannelHandlerContext, msg: Object): void;
    handlerAdded(ctx: ChannelHandlerContext): void;
}