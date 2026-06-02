import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ItemPacketRewriter1_11_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_11to1_11_1/rewriter/ItemPacketRewriter1_11_1.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
export class Protocol1_11To1_11_1 extends AbstractProtocol<ClientboundPackets1_9_3, ClientboundPackets1_9_3, ServerboundPackets1_9_3, ServerboundPackets1_9_3> {
    constructor()
    readonly itemRewriter: ItemPacketRewriter1_11_1;
    getItemRewriter(): ItemPacketRewriter1_11_1;
    registerPackets(): void;
}