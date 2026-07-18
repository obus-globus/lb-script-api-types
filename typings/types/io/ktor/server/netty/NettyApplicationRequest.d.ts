import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { BaseApplicationRequest } from '../../../../io/ktor/server/engine/BaseApplicationRequest.d.ts'
import type { RequestCookies } from '../../../../io/ktor/server/request/RequestCookies.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export abstract class NettyApplicationRequest extends BaseApplicationRequest implements CoroutineScope {
    constructor(call: PipelineCall, coroutineContext: CoroutineContext, context: ChannelHandlerContext, requestBodyChannel: ByteReadChannel, uri: string, keepAlive: boolean)
    readonly context: ChannelHandlerContext;
    readonly cookies: RequestCookies;
    readonly coroutineContext: CoroutineContext;
    // private engineReceiveChannel: ByteReadChannel;
    // private /*not mapped: */ getEngineReceiveChannel(): ByteReadChannel;
    // private keepAlive: boolean;
    /*not mapped: */ getKeepAlive$ktor_server_netty(): boolean;
    readonly queryParameters: Parameters;
    readonly rawQueryParameters: Parameters;
    // private requestBodyChannel: ByteReadChannel;
    // private uri: string;
    // private /*not mapped: */ getUri(): string;
    close(): void;
}