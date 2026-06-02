import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { Protocol1_13To1_13_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13to1_13_1/Protocol1_13To1_13_1.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_13_1 extends ItemRewriter<ClientboundPackets1_13, ServerboundPackets1_13, Protocol1_13To1_13_1> {
    constructor(arg0: Protocol1_13To1_13_1)
    registerPackets(): void;
}