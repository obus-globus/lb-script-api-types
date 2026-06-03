import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ClientboundPackets1_19_3.d.ts'
import type { Protocol1_19_3To1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/Protocol1_19_3To1_19_4.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_19_4 extends EntityRewriter<ClientboundPackets1_19_3, Protocol1_19_3To1_19_4> {
    constructor(arg0: Protocol1_19_3To1_19_4)
    // private damageTypeFromEntityEvent(arg0: number): number;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}