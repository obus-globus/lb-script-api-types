import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2FrameWriter$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter$Configuration.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
import type { Http2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2ConnectionEncoder extends Http2FrameWriter, Object{
    close(): void;
    configuration(): Http2FrameWriter$Configuration;
    connection(): Http2Connection;
    flowController(): Http2RemoteFlowController;
    frameWriter(): Http2FrameWriter;
    lifecycleManager(arg0: Http2LifecycleManager): void;
    pollSentSettings(): JavaMap<any, any>;
    remoteSettings(arg0: JavaMap<any, any>): void;
    writeData(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeFrame(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: Http2Flags, arg4: ByteBuf, arg5: ChannelPromise): ChannelFuture;
    writeGoAway(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ByteBuf, arg4: ChannelPromise): ChannelFuture;
    writePing(arg0: ChannelHandlerContext, arg1: boolean, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writePriority(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeRstStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writeSettingsAck(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
    writeWindowUpdate(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
}