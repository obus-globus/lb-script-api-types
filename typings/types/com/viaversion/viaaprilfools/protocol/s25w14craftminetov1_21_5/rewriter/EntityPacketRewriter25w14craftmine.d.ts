import type { EntityTypes25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/api/minecraft/entities/EntityTypes25w14craftmine.d.ts'
import type { Protocol25w14craftmineTo1_21_5 } from '../../../../../../com/viaversion/viaaprilfools/protocol/s25w14craftminetov1_21_5/Protocol25w14craftmineTo1_21_5.d.ts'
import type { ClientboundPacket25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ClientboundPacket25w14craftmine.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
export class EntityPacketRewriter25w14craftmine extends EntityRewriter<ClientboundPacket25w14craftmine, Protocol25w14craftmineTo1_21_5> {
    static PET_ENTITIES: EntityTypes25w14craftmine[];
    constructor(arg0: Protocol25w14craftmineTo1_21_5)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
    // private updatePlayerSpawnInfo(arg0: PacketWrapper): void;
}