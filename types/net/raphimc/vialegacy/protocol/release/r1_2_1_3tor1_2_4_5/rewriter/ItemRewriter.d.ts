import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_2_1_3Tor1_2_4_5 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/Protocolr1_2_1_3Tor1_2_4_5.d.ts'
import type { ClientboundPackets1_2_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/packet/ClientboundPackets1_2_1.d.ts'
import type { ServerboundPackets1_2_4 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/packet/ServerboundPackets1_2_4.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_2_1, ServerboundPackets1_2_4, Protocolr1_2_1_3Tor1_2_4_5> {
    constructor(arg0: Protocolr1_2_1_3Tor1_2_4_5)
    registerPackets(): void;
}