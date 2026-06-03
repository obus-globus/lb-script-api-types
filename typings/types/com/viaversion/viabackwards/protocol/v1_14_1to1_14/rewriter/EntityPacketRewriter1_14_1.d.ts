import type { LegacyEntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyEntityRewriter.d.ts'
import type { Protocol1_14_1To1_14 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14_1to1_14/Protocol1_14_1To1_14.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
export class EntityPacketRewriter1_14_1 extends LegacyEntityRewriter<ClientboundPackets1_14, Protocol1_14_1To1_14> {
    constructor(arg0: Protocol1_14_1To1_14)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}