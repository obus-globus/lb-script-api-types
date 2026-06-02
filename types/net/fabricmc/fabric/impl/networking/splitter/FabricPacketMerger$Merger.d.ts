import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricSplitPacketPayload } from '../../../../../../net/fabricmc/fabric/impl/networking/splitter/FabricSplitPacketPayload.d.ts'
import type { PacketDecoderAccessor } from '../../../../../../net/fabricmc/fabric/mixin/networking/accessor/PacketDecoderAccessor.d.ts'
import type { PacketDecoder } from '../../../../../../net/minecraft/network/PacketDecoder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class FabricPacketMerger$Merger extends Object {
    constructor(arg0: PacketDecoder<Object>, arg1: Identifier, arg2: number)
    // private byteBuf: ByteBuf;
    // private finalSize: number;
    // private packetDecoder: PacketDecoderAccessor;
    // private packetId: Identifier;
    add(arg0: ChannelHandlerContext, arg1: FabricSplitPacketPayload, arg2: Object[]): boolean;
}