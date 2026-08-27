import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { Protocol26_1To26_2 } from '../../../../../../com/viaversion/viaversion/protocols/v26_1to26_2/Protocol26_1To26_2.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter26_2 extends EntityRewriter<ClientboundPacket26_1, Protocol26_1To26_2> {
    constructor(arg0: Protocol26_1To26_2)
    registerPackets(): void;
    registerRewrites(): void;
    // private toFakeEntityId(arg0: PacketWrapper, arg1: number): number;
    // private toOriginalEntityId(arg0: PacketWrapper, arg1: number): number;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}