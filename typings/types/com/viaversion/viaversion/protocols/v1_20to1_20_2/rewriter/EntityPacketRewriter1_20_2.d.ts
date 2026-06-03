import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
import type { Protocol1_20To1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/Protocol1_20To1_20_2.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_20_2 extends EntityRewriter<ClientboundPackets1_19_4, Protocol1_20To1_20_2> {
    constructor(arg0: Protocol1_20To1_20_2)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}