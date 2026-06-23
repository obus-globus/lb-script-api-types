import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
export interface PacketEncoderAccessor extends Object{
    fabric_encode(arg0: ChannelHandlerContext, arg1: Packet<any>, arg2: ByteBuf): void;
}