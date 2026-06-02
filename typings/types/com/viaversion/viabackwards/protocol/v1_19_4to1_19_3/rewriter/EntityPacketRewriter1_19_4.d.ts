import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_19_4To1_19_3 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_4to1_19_3/Protocol1_19_4To1_19_3.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
export class EntityPacketRewriter1_19_4 extends EntityRewriter<ClientboundPackets1_19_4, Protocol1_19_4To1_19_3> {
    constructor(arg0: Protocol1_19_4To1_19_3)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}