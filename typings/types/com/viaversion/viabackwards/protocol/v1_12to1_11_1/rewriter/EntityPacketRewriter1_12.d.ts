import type { LegacyEntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter.d.ts'
import type { Protocol1_12To1_11_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/Protocol1_12To1_11_1.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_12 } from '../../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ClientboundPackets1_12.d.ts'
export class EntityPacketRewriter1_12 extends LegacyEntityRewriter<ClientboundPackets1_12, Protocol1_12To1_11_1> {
    constructor(arg0: Protocol1_12To1_11_1)
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}