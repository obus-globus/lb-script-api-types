import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_18To1_17_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_18to1_17_1/Protocol1_18To1_17_1.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/packet/ClientboundPackets1_18.d.ts'
export class EntityPacketRewriter1_18 extends EntityRewriter<ClientboundPackets1_18, Protocol1_18To1_17_1> {
    constructor(arg0: Protocol1_18To1_17_1)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}