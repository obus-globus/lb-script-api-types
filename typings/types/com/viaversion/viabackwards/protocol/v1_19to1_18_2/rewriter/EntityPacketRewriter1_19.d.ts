import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_19To1_18_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19to1_18_2/Protocol1_19To1_18_2.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19 } from '../../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ClientboundPackets1_19.d.ts'
export class EntityPacketRewriter1_19 extends EntityRewriter<ClientboundPackets1_19, Protocol1_19To1_18_2> {
    constructor(arg0: Protocol1_19To1_18_2)
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}