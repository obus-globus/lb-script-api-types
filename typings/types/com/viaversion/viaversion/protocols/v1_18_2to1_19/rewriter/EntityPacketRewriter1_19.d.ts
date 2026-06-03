import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
import type { Protocol1_18_2To1_19 } from '../../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/Protocol1_18_2To1_19.d.ts'
import type { DimensionRegistryStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/storage/DimensionRegistryStorage.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityPacketRewriter1_19 extends EntityRewriter<ClientboundPackets1_18, Protocol1_18_2To1_19> {
    constructor(arg0: Protocol1_18_2To1_19)
    // private addMonsterSpawnData(arg0: Map$Entry<string, Tag>[]): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private to3dId(arg0: number): number;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
    // private writeDimensionKey(arg0: PacketWrapper, arg1: DimensionRegistryStorage): void;
}