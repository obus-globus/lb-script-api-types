import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_4_2Tor1_4_4_5 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_2tor1_4_4_5/Protocolr1_4_2Tor1_4_4_5.d.ts'
import type { ClientboundPackets1_4_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_2tor1_4_4_5/packet/ClientboundPackets1_4_2.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_4_2, ServerboundPackets1_5_2, Protocolr1_4_2Tor1_4_4_5> {
    constructor(arg0: Protocolr1_4_2Tor1_4_4_5)
    registerPackets(): void;
}