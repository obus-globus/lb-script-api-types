import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { EnginePipeline } from '../../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { NettyHttpHandlerState } from '../../../../../io/ktor/server/netty/NettyHttpHandlerState.d.ts'
import type { NettyHttpResponsePipeline } from '../../../../../io/ktor/server/netty/cio/NettyHttpResponsePipeline.d.ts'
import type { NettyHttp2Handler$Companion } from '../../../../../io/ktor/server/netty/http2/NettyHttp2Handler$Companion.d.ts'
import type { ResponsePushBuilder } from '../../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableJob } from '../../../../../kotlinx/coroutines/CompletableJob.d.ts'
export class NettyHttp2Handler extends ChannelInboundHandlerAdapter {
    static Companion: NettyHttp2Handler$Companion;
    constructor(enginePipeline: EnginePipeline, application: Application, callEventGroup: (Object | null)[][], userCoroutineContext: CoroutineContext, runningLimit: number)
    // private application: Application;
    // private callEventGroup: (Object | null)[][];
    // private enginePipeline: EnginePipeline;
    // private handlerJob: CompletableJob;
    // private responseWriter: NettyHttpResponsePipeline;
    // private state: NettyHttpHandlerState;
    // private streamKeyField: Field | null;
    // private /*not mapped: */ getStreamKeyField(): Field | null;
    // private userCoroutineContext: CoroutineContext;
    cancel(): void;
    channelActive(context: ChannelHandlerContext): void;
    channelInactive(context: ChannelHandlerContext): void;
    channelRead(context: ChannelHandlerContext, message: Object): void;
    channelReadComplete(context: ChannelHandlerContext): void;
    exceptionCaught(ctx: ChannelHandlerContext, cause: Throwable): void;
    // private onStreamClose(context: ChannelHandlerContext): void;
    // private startHttp2(context: ChannelHandlerContext, headers: (Object | null)[]): void;
    startHttp2PushPromise(context: ChannelHandlerContext, builder: ResponsePushBuilder): void;
}