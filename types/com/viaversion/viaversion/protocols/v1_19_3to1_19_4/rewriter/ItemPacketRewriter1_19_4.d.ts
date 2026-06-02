import type { ClientboundPackets1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ClientboundPackets1_19_3.d.ts'
import type { Protocol1_19_3To1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/Protocol1_19_3To1_19_4.d.ts'
import type { ServerboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ServerboundPackets1_19_4.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_19_4 extends ItemRewriter<ClientboundPackets1_19_3, ServerboundPackets1_19_4, Protocol1_19_3To1_19_4> {
    constructor(arg0: Protocol1_19_3To1_19_4)
    registerPackets(): void;
}