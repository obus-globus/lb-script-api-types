import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteToMessageCodec$Encoder extends MessageToByteEncoder<I> {
    constructor(null_: ByteToMessageCodec$Encoder, arg2: Class<I>)
    constructor(null_: ByteToMessageCodec$Encoder, arg1: boolean)
    acceptOutboundMessage(arg0: Object): boolean;
    encode<I extends unknown>(arg0: ChannelHandlerContext, arg1: I, arg2: ByteBuf): void;
}