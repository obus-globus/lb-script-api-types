import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_19_3To1_19_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_3to1_19_1/Protocol1_19_3To1_19_1.d.ts'
import type { ClientboundPackets1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ClientboundPackets1_19_3.d.ts'
import type { ServerboundPackets1_19_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ServerboundPackets1_19_1.d.ts'
export class BlockItemPacketRewriter1_19_3 extends BackwardsItemRewriter<ClientboundPackets1_19_3, ServerboundPackets1_19_1, Protocol1_19_3To1_19_1> {
    constructor(arg0: Protocol1_19_3To1_19_1)
    registerPackets(): void;
}