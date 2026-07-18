import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2FrameWriter$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter$Configuration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DecoratingHttp2FrameWriter extends Object implements Http2FrameWriter {
    constructor(arg0: Http2FrameWriter)
    // private delegate: Http2FrameWriter;
    close(): void;
    configuration(): Http2FrameWriter$Configuration;
    writeData(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeFrame(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: Http2Flags, arg4: ByteBuf, arg5: ChannelPromise): ChannelFuture;
    writeGoAway(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ByteBuf, arg4: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean, arg8: ChannelPromise): ChannelFuture;
    writePing(arg0: ChannelHandlerContext, arg1: boolean, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writePriority(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writePushPromise(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: (Object | null)[], arg4: number, arg5: ChannelPromise): ChannelFuture;
    writeRstStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writeSettings(arg0: ChannelHandlerContext, arg1: JavaMap<any, any>, arg2: ChannelPromise): ChannelFuture;
    writeSettingsAck(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
    writeWindowUpdate(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
}