import type { ChannelDuplexHandler } from '../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2FrameStreamVisitor } from '../../../../../io/netty/handler/codec/http2/Http2FrameStreamVisitor.d.ts'
export abstract class Http2ChannelDuplexHandler extends ChannelDuplexHandler {
    constructor()
    // private frameCodec: Http2FrameCodec;
    forEachActiveStream(arg0: Http2FrameStreamVisitor): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerAdded0(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    newStream(): Http2FrameStream;
}