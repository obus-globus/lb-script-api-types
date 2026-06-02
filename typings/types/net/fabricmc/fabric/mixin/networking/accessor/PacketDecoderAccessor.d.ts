import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface PacketDecoderAccessor extends Object{
    fabric_decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}