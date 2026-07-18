import type { Headers } from '../../../../../io/ktor/http/Headers.d.ts'
import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { NettyApplicationRequest } from '../../../../../io/ktor/server/netty/NettyApplicationRequest.d.ts'
import type { Http2LocalConnectionPoint } from '../../../../../io/ktor/server/netty/http2/Http2LocalConnectionPoint.d.ts'
import type { RequestCookies } from '../../../../../io/ktor/server/request/RequestCookies.d.ts'
import type { ByteChannel } from '../../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2DataFrame } from '../../../../../io/netty/handler/codec/http2/Http2DataFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { SendChannel } from '../../../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class NettyHttp2ApplicationRequest extends NettyApplicationRequest {
    constructor(call: PipelineCall, coroutineContext: CoroutineContext, context: ChannelHandlerContext, nettyHeaders: (Object | null)[], contentByteChannel: ByteChannel)
    readonly contentActor: SendChannel<Http2DataFrame>;
    readonly contentByteChannel: ByteChannel;
    readonly cookies: RequestCookies;
    // private engineHeaders: Headers;
    // private /*not mapped: */ getEngineHeaders(): Headers;
    readonly local: Http2LocalConnectionPoint;
    readonly nettyHeaders: (Object | null)[];
}