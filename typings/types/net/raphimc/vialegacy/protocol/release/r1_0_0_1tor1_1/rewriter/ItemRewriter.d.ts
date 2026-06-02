import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_0_0_1Tor1_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/Protocolr1_0_0_1Tor1_1.d.ts'
import type { ClientboundPackets1_0_0 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/packet/ClientboundPackets1_0_0.d.ts'
import type { ServerboundPackets1_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/packet/ServerboundPackets1_1.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_0_0, ServerboundPackets1_1, Protocolr1_0_0_1Tor1_1> {
    constructor(arg0: Protocolr1_0_0_1Tor1_1)
    registerPackets(): void;
}