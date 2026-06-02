import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_19_4To1_19_3 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_4to1_19_3/Protocol1_19_4To1_19_3.d.ts'
import type { ServerboundPackets1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ServerboundPackets1_19_3.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
export class BlockItemPacketRewriter1_19_4 extends BackwardsItemRewriter<ClientboundPackets1_19_4, ServerboundPackets1_19_3, Protocol1_19_4To1_19_3> {
    constructor(arg0: Protocol1_19_4To1_19_3)
    registerPackets(): void;
}