import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_15To1_14_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_15to1_14_4/Protocol1_15To1_14_4.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
export class EntityPacketRewriter1_15 extends EntityRewriter<ClientboundPackets1_15, Protocol1_15To1_14_4> {
    constructor(arg0: Protocol1_15To1_14_4)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}