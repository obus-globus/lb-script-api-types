import type { Protocol20w14infiniteTo1_16 } from '../../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/Protocol20w14infiniteTo1_16.d.ts'
import type { ClientboundPackets20w14infinite } from '../../../../../../com/viaversion/viaaprilfools/protocol/s20w14infinitetov1_16/packet/ClientboundPackets20w14infinite.d.ts'
import type { ServerboundPackets1_16 } from '../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/packet/ServerboundPackets1_16.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class BlockItemPacketRewriter20w14infinite extends ItemRewriter<ClientboundPackets20w14infinite, ServerboundPackets1_16, Protocol20w14infiniteTo1_16> {
    constructor(arg0: Protocol20w14infiniteTo1_16)
    registerPackets(): void;
}