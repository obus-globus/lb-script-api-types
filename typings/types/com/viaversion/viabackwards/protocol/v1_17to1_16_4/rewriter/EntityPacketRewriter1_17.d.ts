import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_17To1_16_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_17to1_16_4/Protocol1_17To1_16_4.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ClientboundPackets1_17.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityPacketRewriter1_17 extends EntityRewriter<ClientboundPackets1_17, Protocol1_17To1_16_4> {
    constructor(arg0: Protocol1_17To1_16_4)
    // private warned: boolean;
    onMappingDataLoaded(): void;
    // private reduceExtendedHeight(arg0: Map$Entry<string, Tag>[], arg1: boolean): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}