import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameReader$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2FrameReader$Configuration.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2FrameReader extends Closeable, Object{
    close(): void;
    configuration(): Http2FrameReader$Configuration;
    readFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
}