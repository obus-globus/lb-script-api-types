import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_4_6_7Tor1_5_0_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_6_7tor1_5_0_1/Protocolr1_4_6_7Tor1_5_0_1.d.ts'
import type { ClientboundPackets1_4_6 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_6_7tor1_5_0_1/packet/ClientboundPackets1_4_6.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_4_6, ServerboundPackets1_5_2, Protocolr1_4_6_7Tor1_5_0_1> {
    constructor(arg0: Protocolr1_4_6_7Tor1_5_0_1)
    registerPackets(): void;
}