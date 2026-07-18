import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2FrameCodec$FrameListener extends Object implements Http2FrameListener {
    private constructor(null_: Http2FrameCodec)
    onDataRead(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean): number;
    onGoAwayRead(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ByteBuf): void;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean): void;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean): void;
    onPingAckRead(arg0: ChannelHandlerContext, arg1: number): void;
    onPingRead(arg0: ChannelHandlerContext, arg1: number): void;
    onPriorityRead(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    onPushPromiseRead(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: (Object | null)[], arg4: number): void;
    onRstStreamRead(arg0: ChannelHandlerContext, arg1: number, arg2: number): void;
    onSettingsAckRead(arg0: ChannelHandlerContext): void;
    onSettingsRead(arg0: ChannelHandlerContext, arg1: JavaMap<any, any>): void;
    onUnknownFrame(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: Http2Flags, arg4: ByteBuf): void;
    onWindowUpdateRead(arg0: ChannelHandlerContext, arg1: number, arg2: number): void;
    // private requireStream(arg0: number): Http2FrameStream;
}