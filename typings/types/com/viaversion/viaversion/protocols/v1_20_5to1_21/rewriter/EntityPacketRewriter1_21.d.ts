import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { Protocol1_20_5To1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/Protocol1_20_5To1_21.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_21 extends EntityRewriter<ClientboundPacket1_20_5, Protocol1_20_5To1_21> {
    constructor(arg0: Protocol1_20_5To1_21)
    registerPackets(): void;
    registerRewrites(): void;
    // private storeOnGround(arg0: PacketWrapper): void;
    // private storePosition(arg0: PacketWrapper): void;
    typeFromId(arg0: number): EntityType;
}