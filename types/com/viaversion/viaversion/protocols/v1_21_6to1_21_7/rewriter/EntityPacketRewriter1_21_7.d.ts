import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { Protocol1_21_6To1_21_7 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_6to1_21_7/Protocol1_21_6To1_21_7.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_21_7 extends EntityRewriter<ClientboundPacket1_21_6, Protocol1_21_6To1_21_7> {
    constructor(arg0: Protocol1_21_6To1_21_7)
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}