import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_16_2To1_16_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16_2to1_16_1/Protocol1_16_2To1_16_1.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityPacketRewriter1_16_2 extends EntityRewriter<ClientboundPackets1_16_2, Protocol1_16_2To1_16_1> {
    constructor(arg0: Protocol1_16_2To1_16_1)
    // private oldDimensions: string[];
    // private warned: boolean;
    // private getDimensionFromData(arg0: Map$Entry<string, Tag>[]): string;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}