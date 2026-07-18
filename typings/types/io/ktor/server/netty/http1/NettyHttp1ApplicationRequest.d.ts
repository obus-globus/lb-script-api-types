import type { Headers } from '../../../../../io/ktor/http/Headers.d.ts'
import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { NettyApplicationRequest } from '../../../../../io/ktor/server/netty/NettyApplicationRequest.d.ts'
import type { NettyConnectionPoint } from '../../../../../io/ktor/server/netty/http1/NettyConnectionPoint.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class NettyHttp1ApplicationRequest extends NettyApplicationRequest {
    constructor(call: PipelineCall, coroutineContext: CoroutineContext, context: ChannelHandlerContext, httpRequest: HttpRequest, requestBodyChannel: ByteReadChannel)
    // private engineHeaders: Headers;
    // private /*not mapped: */ getEngineHeaders(): Headers;
    readonly httpRequest: HttpRequest;
    readonly local: NettyConnectionPoint;
}