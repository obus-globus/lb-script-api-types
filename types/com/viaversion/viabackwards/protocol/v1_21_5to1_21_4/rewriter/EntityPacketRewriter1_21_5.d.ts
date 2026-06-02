import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_21_5To1_21_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_5to1_21_4/Protocol1_21_5To1_21_4.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
export class EntityPacketRewriter1_21_5 extends EntityRewriter<ClientboundPacket1_21_5, Protocol1_21_5To1_21_4> {
    constructor(arg0: Protocol1_21_5To1_21_4)
    // private collision(arg0: number): string;
    registerPackets(): void;
    registerRewrites(): void;
    typeFromId(arg0: number): EntityType;
    // private visibility(arg0: number): string;
}