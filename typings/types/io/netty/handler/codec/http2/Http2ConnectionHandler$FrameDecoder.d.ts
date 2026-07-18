import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Http2ConnectionHandler$BaseDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler$BaseDecoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2ConnectionHandler$FrameDecoder extends Http2ConnectionHandler$BaseDecoder {
    private constructor(null_: Http2ConnectionHandler)
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}