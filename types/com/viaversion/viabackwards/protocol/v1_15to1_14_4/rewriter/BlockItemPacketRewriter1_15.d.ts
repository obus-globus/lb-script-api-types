import type { BackwardsItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Protocol1_15To1_14_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_15to1_14_4/Protocol1_15To1_14_4.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ClientboundPackets1_15 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/packet/ClientboundPackets1_15.d.ts'
export class BlockItemPacketRewriter1_15 extends BackwardsItemRewriter<ClientboundPackets1_15, ServerboundPackets1_14, Protocol1_15To1_14_4> {
    constructor(arg0: Protocol1_15To1_14_4)
    registerPackets(): void;
}