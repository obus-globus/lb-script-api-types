import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_0_0 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/packet/ClientboundPackets1_0_0.d.ts'
import type { ServerboundPackets1_0_0 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/packet/ServerboundPackets1_0_0.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_0_0_1tor1_1/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/packet/ClientboundPackets1_1.d.ts'
import type { ServerboundPackets1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/packet/ServerboundPackets1_1.d.ts'
export class Protocolr1_0_0_1Tor1_1 extends StatelessProtocol<ClientboundPackets1_0_0, ClientboundPackets1_1, ServerboundPackets1_0_0, ServerboundPackets1_1> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}