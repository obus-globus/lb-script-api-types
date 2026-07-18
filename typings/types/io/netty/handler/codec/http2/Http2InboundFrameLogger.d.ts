import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameLogger } from '../../../../../io/netty/handler/codec/http2/Http2FrameLogger.d.ts'
import type { Http2FrameReader } from '../../../../../io/netty/handler/codec/http2/Http2FrameReader.d.ts'
import type { Http2FrameReader$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2FrameReader$Configuration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2InboundFrameLogger extends Object implements Http2FrameReader {
    constructor(arg0: Http2FrameReader, arg1: Http2FrameLogger)
    // private logger: Http2FrameLogger;
    // private reader: Http2FrameReader;
    close(): void;
    configuration(): Http2FrameReader$Configuration;
    readFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
}