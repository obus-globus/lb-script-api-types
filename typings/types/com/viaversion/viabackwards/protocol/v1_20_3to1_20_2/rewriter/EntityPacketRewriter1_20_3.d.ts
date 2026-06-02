import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_20_3To1_20_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_3to1_20_2/Protocol1_20_3To1_20_2.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
export class EntityPacketRewriter1_20_3 extends EntityRewriter<ClientboundPacket1_20_3, Protocol1_20_3To1_20_2> {
    constructor(arg0: Protocol1_20_3To1_20_2)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private spawnPositionHandler(): (param0: PacketWrapper) => void;
    typeFromId(arg0: number): EntityType;
}