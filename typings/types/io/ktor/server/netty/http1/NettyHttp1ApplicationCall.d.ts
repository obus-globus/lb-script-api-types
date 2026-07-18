import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { NettyApplicationCall } from '../../../../../io/ktor/server/netty/NettyApplicationCall.d.ts'
import type { NettyHttp1ApplicationRequest } from '../../../../../io/ktor/server/netty/http1/NettyHttp1ApplicationRequest.d.ts'
import type { NettyHttp1ApplicationResponse } from '../../../../../io/ktor/server/netty/http1/NettyHttp1ApplicationResponse.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class NettyHttp1ApplicationCall extends NettyApplicationCall implements CoroutineScope {
    constructor(application: Application, context: ChannelHandlerContext, httpRequest: HttpRequest, requestBodyChannel: ByteReadChannel | null, engineContext: CoroutineContext, coroutineContext: CoroutineContext)
    readonly coroutineContext: CoroutineContext;
    readonly httpRequest: HttpRequest;
    readonly request: NettyHttp1ApplicationRequest;
    readonly response: NettyHttp1ApplicationResponse;
    isContextCloseRequired(): boolean;
    prepareEndOfStreamMessage(lastTransformed: boolean): Object | null;
    prepareMessage(buf: ByteBuf, isLastContent: boolean): Object;
    upgrade(dst: ChannelHandlerContext): void;
}