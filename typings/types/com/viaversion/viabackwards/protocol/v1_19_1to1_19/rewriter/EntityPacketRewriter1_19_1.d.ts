import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_19_1To1_19 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_1to1_19/Protocol1_19_1To1_19.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
export class EntityPacketRewriter1_19_1 extends EntityRewriter<ClientboundPackets1_19_1, Protocol1_19_1To1_19> {
    constructor(arg0: Protocol1_19_1To1_19)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}