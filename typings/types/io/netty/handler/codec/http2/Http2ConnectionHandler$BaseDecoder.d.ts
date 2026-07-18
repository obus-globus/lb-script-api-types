import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Http2ConnectionHandler$BaseDecoder extends Object {
    private constructor(null_: Http2ConnectionHandler)
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    prefaceSent(): boolean;
    sendPrefaceIfNeeded(arg0: ChannelHandlerContext): void;
}