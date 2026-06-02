import type { Protocol1_19_1To1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/Protocol1_19_1To1_19_3.d.ts'
import type { ServerboundPackets1_19_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_1to1_19_3/packet/ServerboundPackets1_19_3.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_19_3 extends ItemRewriter<ClientboundPackets1_19_1, ServerboundPackets1_19_3, Protocol1_19_1To1_19_3> {
    constructor(arg0: Protocol1_19_1To1_19_3)
    registerPackets(): void;
}