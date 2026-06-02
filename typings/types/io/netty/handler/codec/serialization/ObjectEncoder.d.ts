import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
export class ObjectEncoder extends MessageToByteEncoder<Serializable> {
    constructor()
    encode(arg0: ChannelHandlerContext, arg1: Serializable, arg2: ByteBuf): void;
}