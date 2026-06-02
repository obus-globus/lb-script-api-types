import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolb1_8_0_1tor1_0_0_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/Protocolb1_8_0_1tor1_0_0_1.d.ts'
import type { ClientboundPacketsb1_8 } from '../../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/packet/ClientboundPacketsb1_8.d.ts'
import type { ServerboundPackets1_0_0 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/packet/ServerboundPackets1_0_0.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPacketsb1_8, ServerboundPackets1_0_0, Protocolb1_8_0_1tor1_0_0_1> {
    constructor(arg0: Protocolb1_8_0_1tor1_0_0_1)
    registerPackets(): void;
}