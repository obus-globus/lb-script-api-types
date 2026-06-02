import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextSetter } from '../../../net/fabricmc/fabric/impl/networking/context/PacketContextSetter.d.ts'
import type { PacketDecoderAccessor } from '../../../net/fabricmc/fabric/mixin/networking/accessor/PacketDecoderAccessor.d.ts'
import type { PacketListener } from '../../../net/minecraft/network/PacketListener.d.ts'
import type { ProtocolInfo } from '../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { ProtocolSwapHandler } from '../../../net/minecraft/network/ProtocolSwapHandler.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
export class PacketDecoder<T extends PacketListener> extends ByteToMessageDecoder implements PacketContextSetter, PacketDecoderAccessor, ProtocolSwapHandler {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static handleInboundTerminalPacket(paramctx: ChannelHandlerContext, parampacket: Packet<Object>): void;
    static handleOutboundTerminalPacket(paramctx: ChannelHandlerContext, parampacket: Packet<Object>): void;
    constructor(protocolInfo: ProtocolInfo<T>)
    // private packetContext: PacketContext;
    // private protocolInfo: ProtocolInfo<T>;
    decode(ctx: ChannelHandlerContext, input: ByteBuf, out: Object[]): void;
    // private decode$mixinextras$wrapped$9(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: (Object | null)[]): void;
    fabric_setPacketContext(arg0: PacketContext): void;
}