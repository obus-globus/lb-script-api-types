import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Protocol1_20_2To1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/Protocol1_20_2To1_20_3.d.ts'
import type { ClientboundPacket1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPacket1_20_2.d.ts'
import type { EntityRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/EntityRewriter.d.ts'
export class EntityPacketRewriter1_20_3 extends EntityRewriter<ClientboundPacket1_20_2, Protocol1_20_2To1_20_3> {
    constructor(arg0: Protocol1_20_2To1_20_3)
    registerPackets(): void;
    registerRewrites(): void;
    // private sendChunksSentGameEvent(arg0: PacketWrapper): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}