import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Base64Dialect } from '../../../../../io/netty/handler/codec/base64/Base64Dialect.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Base64Decoder extends MessageToMessageDecoder<ByteBuf> {
    constructor()
    constructor(arg0: Base64Dialect)
    // private dialect: Base64Dialect;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}