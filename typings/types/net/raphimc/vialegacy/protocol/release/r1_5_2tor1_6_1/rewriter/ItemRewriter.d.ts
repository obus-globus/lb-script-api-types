import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_5_2Tor1_6_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/Protocolr1_5_2Tor1_6_1.d.ts'
import type { ClientboundPackets1_5_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ClientboundPackets1_5_2.d.ts'
import type { ServerboundPackets1_6_4 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/packet/ServerboundPackets1_6_4.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_5_2, ServerboundPackets1_6_4, Protocolr1_5_2Tor1_6_1> {
    constructor(arg0: Protocolr1_5_2Tor1_6_1)
    registerPackets(): void;
}