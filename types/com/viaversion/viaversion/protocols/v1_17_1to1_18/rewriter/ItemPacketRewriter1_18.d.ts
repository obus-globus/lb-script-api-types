import type { ServerboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { Protocol1_17_1To1_18 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/Protocol1_17_1To1_18.d.ts'
import type { ClientboundPackets1_17_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/packet/ClientboundPackets1_17_1.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_18 extends ItemRewriter<ClientboundPackets1_17_1, ServerboundPackets1_17, Protocol1_17_1To1_18> {
    constructor(arg0: Protocol1_17_1To1_18)
    registerPackets(): void;
}