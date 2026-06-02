import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageCodec } from '../../../../io/netty/handler/codec/ByteToMessageCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BatchLengthCodec extends ByteToMessageCodec<ByteBuf> {
    constructor()
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: ByteBuf): void;
}