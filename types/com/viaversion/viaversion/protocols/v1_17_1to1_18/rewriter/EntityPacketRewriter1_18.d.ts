import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Protocol1_17_1To1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/Protocol1_17_1To1_18.d.ts'
import type { ClientboundPackets1_17_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/packet/ClientboundPackets1_17_1.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_18 extends EntityRewriter<ClientboundPackets1_17_1, Protocol1_17_1To1_18> {
    constructor(arg0: Protocol1_17_1To1_18)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}