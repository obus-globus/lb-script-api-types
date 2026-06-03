import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { Protocol1_20_3To1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/Protocol1_20_3To1_20_5.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { KeyMappings } from '../../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityPacketRewriter1_20_5 extends EntityRewriter<ClientboundPacket1_20_3, Protocol1_20_3To1_20_5> {
    constructor(arg0: Protocol1_20_3To1_20_5)
    // private addColor(arg0: EntityData, arg1: number): void;
    // private checkSoundTag(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private moveTag(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: string): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private replaceNullValues(arg0: RegistryEntry[]): void;
    // private sendRangeAttributes(arg0: UserConnection, arg1: boolean): void;
    // private toMappings(arg0: RegistryEntry[]): KeyMappings;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
    // private updateParticleFormat(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private writeAttribute(arg0: PacketWrapper, arg1: string, arg2: number, arg3: UUID, arg4: number): void;
}