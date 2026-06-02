import type { ClientboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ClientboundPackets1_16.d.ts'
import type { Protocol1_16_1To1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/Protocol1_16_1To1_16_2.d.ts'
import type { ServerboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ServerboundPackets1_16_2.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_16_2 extends ItemRewriter<ClientboundPackets1_16, ServerboundPackets1_16_2, Protocol1_16_1To1_16_2> {
    constructor(arg0: Protocol1_16_1To1_16_2)
    registerPackets(): void;
}