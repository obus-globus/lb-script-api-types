import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_2_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/packet/ClientboundPackets1_2_1.d.ts'
import type { ServerboundPackets1_2_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/packet/ServerboundPackets1_2_1.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_2_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/packet/ClientboundPackets1_2_4.d.ts'
import type { ServerboundPackets1_2_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/packet/ServerboundPackets1_2_4.d.ts'
export class Protocolr1_2_1_3Tor1_2_4_5 extends StatelessProtocol<ClientboundPackets1_2_1, ClientboundPackets1_2_4, ServerboundPackets1_2_1, ServerboundPackets1_2_4> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}