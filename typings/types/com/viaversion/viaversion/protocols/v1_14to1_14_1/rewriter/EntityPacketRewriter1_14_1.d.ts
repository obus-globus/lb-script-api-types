import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { Protocol1_14To1_14_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14to1_14_1/Protocol1_14To1_14_1.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_14_1 extends EntityRewriter<ClientboundPackets1_14, Protocol1_14To1_14_1> {
    constructor(arg0: Protocol1_14To1_14_1)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}