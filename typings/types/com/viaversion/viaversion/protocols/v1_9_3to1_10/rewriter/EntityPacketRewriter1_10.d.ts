import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityTypes1_9$EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_9$EntityType.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { Protocol1_9_3To1_10 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_3to1_10/Protocol1_9_3To1_10.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_10 extends EntityRewriter<ClientboundPackets1_9_3, Protocol1_9_3To1_10> {
    constructor(arg0: Protocol1_9_3To1_10)
    objectTypeFromId(arg0: number, arg1: number): EntityTypes1_9$EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityTypes1_9$EntityType;
    typeFromId(arg0: string): EntityType;
}