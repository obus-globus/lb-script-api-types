import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Protocol1_11_1To1_12 } from '../../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/Protocol1_11_1To1_12.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_12 extends EntityRewriter<ClientboundPackets1_9_3, Protocol1_11_1To1_12> {
    constructor(arg0: Protocol1_11_1To1_12)
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}