import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ClientboundPackets1_17.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ClientboundPackets1_17_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/packet/ClientboundPackets1_17_1.d.ts'
import type { ItemPacketRewriter1_17_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/rewriter/ItemPacketRewriter1_17_1.d.ts'
export class Protocol1_17To1_17_1 extends AbstractProtocol<ClientboundPackets1_17, ClientboundPackets1_17_1, ServerboundPackets1_17, ServerboundPackets1_17> {
    constructor()
    readonly itemRewriter: ItemPacketRewriter1_17_1;
    getItemRewriter(): ItemPacketRewriter1_17_1;
    registerPackets(): void;
}