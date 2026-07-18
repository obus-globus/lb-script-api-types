import type { BaseApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/BaseApplicationEngine$Configuration.d.ts'
import type { ServerBootstrap } from '../../../../io/netty/bootstrap/ServerBootstrap.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { HttpServerCodec } from '../../../../io/netty/handler/codec/http/HttpServerCodec.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class NettyApplicationEngine$Configuration extends BaseApplicationEngine$Configuration {
    constructor()
    channelPipelineConfig: (param0: Map$Entry<string, ChannelHandler>[]) => void;
    configureBootstrap: (param0: ServerBootstrap) => void;
    enableH2c: boolean;
    enableHttp2: boolean;
    httpServerCodec: () => HttpServerCodec;
    maxChunkSize: number;
    maxHeaderSize: number;
    maxInitialLineLength: number;
    requestReadTimeoutSeconds: number;
    responseWriteTimeoutSeconds: number;
    runningLimit: number;
    shareWorkGroup: boolean;
    tcpKeepAlive: boolean;
    // private defaultHttpServerCodec(): HttpServerCodec;
}