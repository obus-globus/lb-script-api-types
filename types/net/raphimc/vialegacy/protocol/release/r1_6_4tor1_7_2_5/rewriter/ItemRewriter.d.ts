import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_6_4Tor1_7_2_5 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/Protocolr1_6_4Tor1_7_2_5.d.ts'
import type { ClientboundPackets1_6_4 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/packet/ClientboundPackets1_6_4.d.ts'
import type { ServerboundPackets1_7_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ServerboundPackets1_7_2.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_6_4, ServerboundPackets1_7_2, Protocolr1_6_4Tor1_7_2_5> {
    constructor(arg0: Protocolr1_6_4Tor1_7_2_5)
    registerPackets(): void;
}