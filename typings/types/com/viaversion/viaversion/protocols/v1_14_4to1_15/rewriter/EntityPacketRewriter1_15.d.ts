import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPackets1_14_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_3to1_14_4/packet/ClientboundPackets1_14_4.d.ts'
import type { Protocol1_14_4To1_15 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/Protocol1_14_4To1_15.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_15 extends EntityRewriter<ClientboundPackets1_14_4, Protocol1_14_4To1_15> {
    constructor(arg0: Protocol1_14_4To1_15)
    newEntityId(arg0: number): number;
    registerPackets(): void;
    registerRewrites(): void;
    // private sendEntityDataPacket(arg0: PacketWrapper, arg1: number): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}