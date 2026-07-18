import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2FrameWriter$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter$Configuration.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
import type { Http2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController.d.ts'
import type { Http2SettingsReceivedConsumer } from '../../../../../io/netty/handler/codec/http2/Http2SettingsReceivedConsumer.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2ConnectionEncoder extends Object implements Http2ConnectionEncoder, Http2SettingsReceivedConsumer {
    constructor(arg0: Http2Connection, arg1: Http2FrameWriter)
    // private connection: Http2Connection;
    // private frameWriter: Http2FrameWriter;
    // private lifecycleManager: Http2LifecycleManager;
    // private outstandingLocalSettingsQueue: JavaMap<any, any>[];
    // private outstandingRemoteSettingsQueue: JavaMap<any, any>[];
    close(): void;
    configuration(): Http2FrameWriter$Configuration;
    connection(): Http2Connection;
    consumeReceivedSettings(arg0: JavaMap<any, any>): void;
    flowController(): Http2RemoteFlowController;
    frameWriter(): Http2FrameWriter;
    lifecycleManager(arg0: Http2LifecycleManager): void;
    // private notifyLifecycleManagerOnError(arg0: ChannelFuture, arg1: ChannelHandlerContext): void;
    pollSentSettings(): JavaMap<any, any>;
    remoteSettings(arg0: JavaMap<any, any>): void;
    // private requireStream(arg0: number): Http2Stream;
    writeData(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeFrame(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: Http2Flags, arg4: ByteBuf, arg5: ChannelPromise): ChannelFuture;
    writeGoAway(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ByteBuf, arg4: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean, arg8: ChannelPromise): ChannelFuture;
    // private writeHeaders0(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean, arg9: ChannelPromise): ChannelFuture;
    writePing(arg0: ChannelHandlerContext, arg1: boolean, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writePriority(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writePushPromise(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: (Object | null)[], arg4: number, arg5: ChannelPromise): ChannelFuture;
    writeRstStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writeSettings(arg0: ChannelHandlerContext, arg1: JavaMap<any, any>, arg2: ChannelPromise): ChannelFuture;
    writeSettingsAck(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
    writeWindowUpdate(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
}