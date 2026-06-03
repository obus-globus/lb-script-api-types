import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { Protocol1_16_4To1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/Protocol1_16_4To1_17.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_17 extends EntityRewriter<ClientboundPackets1_16_2, Protocol1_16_4To1_17> {
    constructor(arg0: Protocol1_16_4To1_17)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}