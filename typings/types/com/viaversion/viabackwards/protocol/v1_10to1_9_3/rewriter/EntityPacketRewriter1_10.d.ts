import type { LegacyEntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter.d.ts'
import type { Protocol1_10To1_9_3 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_10to1_9_3/Protocol1_10To1_9_3.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
export class EntityPacketRewriter1_10 extends LegacyEntityRewriter<ClientboundPackets1_9_3, Protocol1_10To1_9_3> {
    constructor(arg0: Protocol1_10To1_9_3)
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}