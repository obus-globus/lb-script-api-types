import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_21_4To1_21_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_4to1_21_2/Protocol1_21_4To1_21_2.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
export class EntityPacketRewriter1_21_4 extends EntityRewriter<ClientboundPacket1_21_2, Protocol1_21_4To1_21_2> {
    constructor(arg0: Protocol1_21_4To1_21_2)
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
}