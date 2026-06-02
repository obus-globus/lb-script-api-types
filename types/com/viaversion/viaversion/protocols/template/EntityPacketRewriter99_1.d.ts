import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Protocol98_1To99_1 } from '../../../../../com/viaversion/viaversion/protocols/template/Protocol98_1To99_1.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { EntityRewriter } from '../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter99_1 extends EntityRewriter<ClientboundPacket26_1, Protocol98_1To99_1> {
    constructor(arg0: Protocol98_1To99_1)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}