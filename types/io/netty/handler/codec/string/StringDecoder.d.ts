import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringDecoder extends MessageToMessageDecoder<ByteBuf> {
    constructor()
    constructor(arg0: Charset)
    // private charset: Charset;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}