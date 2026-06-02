import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteArrayDecoder extends MessageToMessageDecoder<ByteBuf> {
    constructor()
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}