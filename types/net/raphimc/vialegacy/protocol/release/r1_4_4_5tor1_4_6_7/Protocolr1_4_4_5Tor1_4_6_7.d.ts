import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_4_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_4_5tor1_4_6_7/packet/ClientboundPackets1_4_4.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_4_5tor1_4_6_7/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_4_6 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_6_7tor1_5_0_1/packet/ClientboundPackets1_4_6.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
export class Protocolr1_4_4_5Tor1_4_6_7 extends StatelessProtocol<ClientboundPackets1_4_4, ClientboundPackets1_4_6, ServerboundPackets1_5_2, ServerboundPackets1_5_2> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}