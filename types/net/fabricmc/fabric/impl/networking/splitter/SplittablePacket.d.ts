import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PayloadTypeRegistryImpl } from '../../../../../../net/fabricmc/fabric/impl/networking/PayloadTypeRegistryImpl.d.ts'
import type { PacketEncoder } from '../../../../../../net/minecraft/network/PacketEncoder.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
export interface SplittablePacket extends Object{
    fabric_split(arg0: PayloadTypeRegistryImpl<Object>, arg1: ChannelHandlerContext, arg2: PacketEncoder<Object>, arg3: Packet<Object>, arg4: (param0: Packet<Object>) => void): void;
}