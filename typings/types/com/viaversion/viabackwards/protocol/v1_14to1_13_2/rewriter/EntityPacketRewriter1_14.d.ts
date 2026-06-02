import type { EntityPositionHandler } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/EntityPositionHandler.d.ts'
import type { LegacyEntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter.d.ts'
import type { Protocol1_14To1_13_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/Protocol1_14To1_13_2.d.ts'
import type { VillagerData } from '../../../../../../com/viaversion/viaversion/api/minecraft/VillagerData.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
export class EntityPacketRewriter1_14 extends LegacyEntityRewriter<ClientboundPackets1_14, Protocol1_14To1_13_2> {
    constructor(arg0: Protocol1_14To1_13_2)
    // private positionHandler: EntityPositionHandler;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private trackAndCacheEntityPosition(arg0: PacketWrapper, arg1: EntityType): void;
    typeFromId(arg0: number): EntityType;
    villagerDataToProfession(arg0: VillagerData): number;
}