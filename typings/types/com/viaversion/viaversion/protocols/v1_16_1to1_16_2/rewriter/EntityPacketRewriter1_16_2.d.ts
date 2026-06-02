import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { Protocol1_16_1To1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/Protocol1_16_1To1_16_2.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityPacketRewriter1_16_2 extends EntityRewriter<ClientboundPackets1_16, Protocol1_16_1To1_16_2> {
    constructor(arg0: Protocol1_16_1To1_16_2)
    // private getDimensionData(arg0: string): Map$Entry<string, Tag>[];
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}