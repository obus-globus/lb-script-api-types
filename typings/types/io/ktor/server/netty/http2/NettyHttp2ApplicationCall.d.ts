import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { NettyApplicationCall } from '../../../../../io/ktor/server/netty/NettyApplicationCall.d.ts'
import type { NettyHttp2ApplicationRequest } from '../../../../../io/ktor/server/netty/http2/NettyHttp2ApplicationRequest.d.ts'
import type { NettyHttp2ApplicationResponse } from '../../../../../io/ktor/server/netty/http2/NettyHttp2ApplicationResponse.d.ts'
import type { NettyHttp2Handler } from '../../../../../io/ktor/server/netty/http2/NettyHttp2Handler.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class NettyHttp2ApplicationCall extends NettyApplicationCall {
    constructor(application: Application, context: ChannelHandlerContext, headers: (Object | null)[], handler: NettyHttp2Handler, engineContext: CoroutineContext, coroutineContext: CoroutineContext)
    readonly coroutineContext: CoroutineContext;
    readonly headers: (Object | null)[];
    readonly request: NettyHttp2ApplicationRequest;
    readonly response: NettyHttp2ApplicationResponse;
    isContextCloseRequired(): boolean;
    prepareEndOfStreamMessage(lastTransformed: boolean): Object | null;
    prepareMessage(buf: ByteBuf, isLastContent: boolean): Object;
    upgrade(dst: ChannelHandlerContext): void;
}