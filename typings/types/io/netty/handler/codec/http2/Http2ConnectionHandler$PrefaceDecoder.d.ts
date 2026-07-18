import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Http2ConnectionHandler$BaseDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler$BaseDecoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2ConnectionHandler$PrefaceDecoder extends Http2ConnectionHandler$BaseDecoder {
    constructor(null_: Http2ConnectionHandler, arg1: ChannelHandlerContext)
    // private clientPrefaceString: ByteBuf;
    // private prefaceSent: boolean;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    // private cleanup(): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    prefaceSent(): boolean;
    // private readClientPrefaceString(arg0: ByteBuf): boolean;
    sendPrefaceIfNeeded(arg0: ChannelHandlerContext): void;
    // private verifyFirstFrameIsSettings(arg0: ByteBuf): boolean;
}