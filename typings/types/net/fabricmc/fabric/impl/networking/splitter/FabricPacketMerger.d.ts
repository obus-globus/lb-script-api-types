import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PayloadTypeRegistryImpl } from '../../../../../../net/fabricmc/fabric/impl/networking/PayloadTypeRegistryImpl.d.ts'
import type { VanillaPacketTypes } from '../../../../../../net/fabricmc/fabric/impl/networking/VanillaPacketTypes.d.ts'
import type { FabricPacketMerger$Merger } from '../../../../../../net/fabricmc/fabric/impl/networking/splitter/FabricPacketMerger$Merger.d.ts'
import type { PacketDecoder } from '../../../../../../net/minecraft/network/PacketDecoder.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
export class FabricPacketMerger extends MessageToMessageDecoder<Packet<any>> {
    constructor(arg0: PacketDecoder<any>, arg1: PayloadTypeRegistryImpl<any>, arg2: VanillaPacketTypes)
    // private packetDecoder: PacketDecoder<any>;
    // private packetMerger: FabricPacketMerger$Merger;
    // private payloadTypeRegistry: PayloadTypeRegistryImpl<any>;
    // private vanillaPacketTypes: VanillaPacketTypes;
    decode(arg0: ChannelHandlerContext, arg1: Packet<any>, arg2: Object[]): void;
}