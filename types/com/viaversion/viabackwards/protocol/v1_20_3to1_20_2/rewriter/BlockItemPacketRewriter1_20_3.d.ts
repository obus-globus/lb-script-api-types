import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_20_3To1_20_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_3to1_20_2/Protocol1_20_3To1_20_2.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { ServerboundPacket1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ServerboundPacket1_20_2.d.ts'
export class BlockItemPacketRewriter1_20_3 extends BackwardsItemRewriter<ClientboundPacket1_20_3, ServerboundPacket1_20_2, Protocol1_20_3To1_20_2> {
    constructor(arg0: Protocol1_20_3To1_20_2)
    registerPackets(): void;
}