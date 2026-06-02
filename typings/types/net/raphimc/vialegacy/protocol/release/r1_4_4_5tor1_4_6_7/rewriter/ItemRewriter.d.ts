import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_4_4_5Tor1_4_6_7 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_4_5tor1_4_6_7/Protocolr1_4_4_5Tor1_4_6_7.d.ts'
import type { ClientboundPackets1_4_4 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_4_5tor1_4_6_7/packet/ClientboundPackets1_4_4.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_4_4, ServerboundPackets1_5_2, Protocolr1_4_4_5Tor1_4_6_7> {
    constructor(arg0: Protocolr1_4_4_5Tor1_4_6_7)
    registerPackets(): void;
}