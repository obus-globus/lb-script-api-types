import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Protocol1_19_1To1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/Protocol1_19_1To1_19_3.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_19_3 extends EntityRewriter<ClientboundPackets1_19_1, Protocol1_19_1To1_19_3> {
    constructor(arg0: Protocol1_19_1To1_19_3)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}