import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_2_4_5Tor1_3_1_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/Protocolr1_2_4_5Tor1_3_1_2.d.ts'
import type { ClientboundPackets1_2_4 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/packet/ClientboundPackets1_2_4.d.ts'
import type { ServerboundPackets1_3_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/packet/ServerboundPackets1_3_1.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_2_4, ServerboundPackets1_3_1, Protocolr1_2_4_5Tor1_3_1_2> {
    constructor(arg0: Protocolr1_2_4_5Tor1_3_1_2)
    registerPackets(): void;
}