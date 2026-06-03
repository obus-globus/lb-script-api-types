import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol26_1To1_21_11 } from '../../../../../../com/viaversion/viabackwards/protocol/v26_1to1_21_11/Protocol26_1To1_21_11.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
export class EntityPacketRewriter26_1 extends EntityRewriter<ClientboundPacket26_1, Protocol26_1To1_21_11> {
    constructor(arg0: Protocol26_1To1_21_11)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}