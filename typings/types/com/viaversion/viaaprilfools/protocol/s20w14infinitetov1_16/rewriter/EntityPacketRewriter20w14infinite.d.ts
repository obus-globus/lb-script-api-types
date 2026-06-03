import type { Protocol20w14infiniteTo1_16 } from '../../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/Protocol20w14infiniteTo1_16.d.ts'
import type { ClientboundPackets20w14infinite } from '../../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/packet/ClientboundPackets20w14infinite.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter20w14infinite extends EntityRewriter<ClientboundPackets20w14infinite, Protocol20w14infiniteTo1_16> {
    constructor(arg0: Protocol20w14infiniteTo1_16)
    // private DIMENSION_HANDLER: (param0: PacketWrapper) => void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}