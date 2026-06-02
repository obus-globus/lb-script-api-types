import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_20_5To1_20_3 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_5to1_20_3/Protocol1_20_5To1_20_3.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { KeyMappings } from '../../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityPacketRewriter1_20_5 extends EntityRewriter<ClientboundPacket1_20_5, Protocol1_20_5To1_20_3> {
    constructor(arg0: Protocol1_20_5To1_20_3)
    // private encodeARGB(arg0: number, arg1: number, arg2: number, arg3: number): number;
    // private encodeColorPart(arg0: number): number;
    // private moveTag(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: string): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private removeAlpha(arg0: number): number;
    // private sendCarpetColorUpdate(arg0: UserConnection, arg1: number, arg2: Item): void;
    // private toMappings(arg0: RegistryEntry[]): KeyMappings;
    typeFromId(arg0: number): EntityType;
    // private updateDimensionTypeData(arg0: Map$Entry<string, Tag>[]): void;
    // private updateParticleFormat(arg0: Map$Entry<string, Tag>[], arg1: string): void;
}