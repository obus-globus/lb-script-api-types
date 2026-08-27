import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsb1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_1_2tob1_2_0_2/packet/ClientboundPacketsb1_1.d.ts'
import type { ServerboundPacketsb1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_1_2tob1_2_0_2/packet/ServerboundPacketsb1_1.d.ts'
import type { BlockDataRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_1_2tob1_2_0_2/rewriter/BlockDataRewriter.d.ts'
import type { ClientboundPacketsb1_2 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_2_0_2tob1_3_0_1/packet/ClientboundPacketsb1_2.d.ts'
import type { ServerboundPacketsb1_2 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_2_0_2tob1_3_0_1/packet/ServerboundPacketsb1_2.d.ts'
export class Protocolb1_1_2Tob1_2_0_2 extends StatelessProtocol<ClientboundPacketsb1_1, ClientboundPacketsb1_2, ServerboundPacketsb1_1, ServerboundPacketsb1_2> {
    constructor()
    // private blockDataRewriter: BlockDataRewriter;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}