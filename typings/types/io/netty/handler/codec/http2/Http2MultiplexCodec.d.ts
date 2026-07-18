import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { AbstractHttp2StreamChannel } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamChannel.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2Frame } from '../../../../../io/netty/handler/codec/http2/Http2Frame.d.ts'
import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2FrameCodec$DefaultHttp2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec$DefaultHttp2FrameStream.d.ts'
import type { Http2FrameStreamException } from '../../../../../io/netty/handler/codec/http2/Http2FrameStreamException.d.ts'
import type { Http2GoAwayFrame } from '../../../../../io/netty/handler/codec/http2/Http2GoAwayFrame.d.ts'
import type { Http2StreamChannel } from '../../../../../io/netty/handler/codec/http2/Http2StreamChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2MultiplexCodec extends Http2FrameCodec {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: Http2ConnectionEncoder, arg1: Http2ConnectionDecoder, arg2: JavaMap<any, any>, arg3: ChannelHandler, arg4: ChannelHandler, arg5: boolean, arg6: boolean)
    // private ctx: ChannelHandlerContext;
    // private idCount: number;
    // private inboundStreamHandler: ChannelHandler;
    // private parentReadInProgress: boolean;
    // private readCompletePendingQueue: AbstractHttp2StreamChannel[];
    // private upgradeStreamHandler: ChannelHandler;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    flush0(arg0: ChannelHandlerContext): void;
    handlerAdded0(arg0: ChannelHandlerContext): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    newOutboundStream(): Http2StreamChannel;
    onHttp2Frame(arg0: ChannelHandlerContext, arg1: Http2Frame): void;
    onHttp2FrameStreamException(arg0: ChannelHandlerContext, arg1: Http2FrameStreamException): void;
    // private onHttp2GoAwayFrame(arg0: ChannelHandlerContext, arg1: Http2GoAwayFrame): void;
    onHttp2StreamStateChanged(arg0: ChannelHandlerContext, arg1: Http2FrameCodec$DefaultHttp2FrameStream): void;
    onHttpClientUpgrade(): void;
    onUserEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    // private processPendingReadCompleteQueue(): void;
}