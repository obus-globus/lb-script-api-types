import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_21_7To1_21_6 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_7to1_21_6/Protocol1_21_7To1_21_6.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
export class EntityPacketRewriter1_21_7 extends EntityRewriter<ClientboundPacket1_21_6, Protocol1_21_7To1_21_6> {
    constructor(arg0: Protocol1_21_7To1_21_6)
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}