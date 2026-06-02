import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Protocol1_21_11To26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/Protocol1_21_11To26_1.d.ts'
import type { ClientboundPacket1_21_11 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/packet/ClientboundPacket1_21_11.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter26_1 extends EntityRewriter<ClientboundPacket1_21_11, Protocol1_21_11To26_1> {
    constructor(arg0: Protocol1_21_11To26_1)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    // private writeInteract(arg0: PacketWrapper): void;
}