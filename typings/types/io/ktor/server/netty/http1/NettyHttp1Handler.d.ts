import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { EnginePipeline } from '../../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { NettyHttpHandlerState } from '../../../../../io/ktor/server/netty/NettyHttpHandlerState.d.ts'
import type { NettyHttpResponsePipeline } from '../../../../../io/ktor/server/netty/cio/NettyHttpResponsePipeline.d.ts'
import type { NettyHttp1ApplicationCall } from '../../../../../io/ktor/server/netty/http1/NettyHttp1ApplicationCall.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableDeferred } from '../../../../../kotlinx/coroutines/CompletableDeferred.d.ts'
export class NettyHttp1Handler extends ChannelInboundHandlerAdapter {
    constructor(applicationProvider: () => Application, enginePipeline: EnginePipeline, environment: ApplicationEnvironment, callEventGroup: (Object | null)[][], engineContext: CoroutineContext, userContext: CoroutineContext, runningLimit: number)
    // private activated: boolean;
    // private activeCalls: NettyHttp1ApplicationCall[];
    // private applicationProvider: () => Application;
    // private callEventGroup: (Object | null)[][];
    // private engineContext: CoroutineContext;
    // private enginePipeline: EnginePipeline;
    // private environment: ApplicationEnvironment;
    // private handlerJob: CompletableDeferred<void>;
    // private responseWriter: NettyHttpResponsePipeline;
    // private runningLimit: number;
    // private skipEmpty: boolean;
    // private state: NettyHttpHandlerState;
    // private userContext: CoroutineContext;
    // private callReadIfNeeded(context: ChannelHandlerContext): void;
    channelActive(context: ChannelHandlerContext): void;
    channelInactive(context: ChannelHandlerContext): void;
    channelRead(context: ChannelHandlerContext, message: Object): void;
    channelReadComplete(context: ChannelHandlerContext | null): void;
    exceptionCaught(context: ChannelHandlerContext, cause: Throwable): void;
    // private handleRequest(context: ChannelHandlerContext, message: HttpRequest): void;
    // private onConnectionClose(context: ChannelHandlerContext): void;
    // private prepareCallFromRequest(context: ChannelHandlerContext, message: HttpRequest, callContext: CoroutineContext): NettyHttp1ApplicationCall;
    // private prepareRequestContentChannel(context: ChannelHandlerContext, message: HttpRequest): ByteReadChannel;
}