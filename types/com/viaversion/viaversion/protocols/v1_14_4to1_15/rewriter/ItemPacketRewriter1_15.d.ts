import type { ServerboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ClientboundPackets1_14_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_3to1_14_4/packet/ClientboundPackets1_14_4.d.ts'
import type { Protocol1_14_4To1_15 } from '../../../../../../com/viaversion/viaversion/protocols/v1_14_4to1_15/Protocol1_14_4To1_15.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_15 extends ItemRewriter<ClientboundPackets1_14_4, ServerboundPackets1_14, Protocol1_14_4To1_15> {
    constructor(arg0: Protocol1_14_4To1_15)
    registerPackets(): void;
}