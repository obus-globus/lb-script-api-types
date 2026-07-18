import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { EnginePipeline } from '../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { NettyChannelInitializer$Companion } from '../../../../io/ktor/server/netty/NettyChannelInitializer$Companion.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelInitializer } from '../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { SocketChannel } from '../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { HttpServerCodec } from '../../../../io/netty/handler/codec/http/HttpServerCodec.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class NettyChannelInitializer extends ChannelInitializer<SocketChannel> {
    static Companion: NettyChannelInitializer$Companion;
    constructor(applicationProvider: () => Application, enginePipeline: EnginePipeline, environment: ApplicationEnvironment, callEventGroup: (Object | null)[][], engineContext: CoroutineContext, userContext: CoroutineContext, connector: EngineConnectorConfig, runningLimit: number, responseWriteTimeout: number, requestReadTimeout: number, httpServerCodec: () => HttpServerCodec, channelPipelineConfig: (param0: Map$Entry<string, ChannelHandler>[]) => void, enableHttp2: boolean)
    constructor(applicationProvider: () => Application, enginePipeline: EnginePipeline, environment: ApplicationEnvironment, callEventGroup: (Object | null)[][], engineContext: CoroutineContext, userContext: CoroutineContext, connector: EngineConnectorConfig, runningLimit: number, responseWriteTimeout: number, requestReadTimeout: number, httpServerCodec: () => HttpServerCodec, channelPipelineConfig: (param0: Map$Entry<string, ChannelHandler>[]) => void, enableHttp2: boolean, enableH2c: boolean)
    // private applicationProvider: () => Application;
    // private callEventGroup: (Object | null)[][];
    // private channelPipelineConfig: (param0: Map$Entry<string, ChannelHandler>[]) => void;
    // private connector: EngineConnectorConfig;
    // private enableH2c: boolean;
    // private enableHttp2: boolean;
    // private engineContext: CoroutineContext;
    // private enginePipeline: EnginePipeline;
    // private environment: ApplicationEnvironment;
    // private httpServerCodec: () => HttpServerCodec;
    // private requestReadTimeout: number;
    // private responseWriteTimeout: number;
    // private runningLimit: number;
    // private sslContext: SslContext | null;
    // private userContext: CoroutineContext;
    // private configurePipeline(pipeline: Map$Entry<string, ChannelHandler>[], protocol: string): void;
    protected initChannel(ch: SocketChannel): void;
}