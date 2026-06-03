import type { LegacyEntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter.d.ts'
import type { Protocol1_13_1To1_13 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13_1to1_13/Protocol1_13_1To1_13.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
export class EntityPacketRewriter1_13_1 extends LegacyEntityRewriter<ClientboundPackets1_13, Protocol1_13_1To1_13> {
    constructor(arg0: Protocol1_13_1To1_13)
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}