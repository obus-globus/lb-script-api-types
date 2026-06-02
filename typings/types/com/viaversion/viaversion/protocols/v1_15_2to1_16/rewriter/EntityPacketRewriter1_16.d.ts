import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
import type { Protocol1_15_2To1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/Protocol1_15_2To1_16.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_16 extends EntityRewriter<ClientboundPackets1_15, Protocol1_15_2To1_16> {
    constructor(arg0: Protocol1_15_2To1_16)
    // private DIMENSION_HANDLER: (param0: PacketWrapper) => void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}