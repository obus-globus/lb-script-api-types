import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_1Tor1_2_1_3 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/Protocolr1_1Tor1_2_1_3.d.ts'
import type { ClientboundPackets1_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/packet/ClientboundPackets1_1.d.ts'
import type { ServerboundPackets1_2_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/packet/ServerboundPackets1_2_1.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_1, ServerboundPackets1_2_1, Protocolr1_1Tor1_2_1_3> {
    constructor(arg0: Protocolr1_1Tor1_2_1_3)
    registerPackets(): void;
}