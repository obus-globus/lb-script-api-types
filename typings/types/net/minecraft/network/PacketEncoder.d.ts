import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { PacketContext } from '../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextSetter } from '../../../net/fabricmc/fabric/impl/networking/context/PacketContextSetter.d.ts'
import type { PacketEncoderAccessor } from '../../../net/fabricmc/fabric/mixin/networking/accessor/PacketEncoderAccessor.d.ts'
import type { PacketListener } from '../../../net/minecraft/network/PacketListener.d.ts'
import type { ProtocolInfo } from '../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
export class PacketEncoder<T extends PacketListener> extends MessageToByteEncoder<Packet<T>> implements PacketContextSetter, PacketEncoderAccessor {
    constructor(protocolInfo: ProtocolInfo<T>)
    // private packetContext: PacketContext;
    // private protocolInfo: ProtocolInfo<T>;
    encode(ctx: ChannelHandlerContext, packet: Packet<T>, output: ByteBuf): void;
    // private encode$mixinextras$wrapped$9(arg0: ChannelHandlerContext, arg1: Packet<PacketListener>, arg2: ByteBuf): void;
    fabric_setPacketContext(arg0: PacketContext): void;
}