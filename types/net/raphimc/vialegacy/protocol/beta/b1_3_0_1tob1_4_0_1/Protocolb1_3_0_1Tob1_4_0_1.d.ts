import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsb1_3 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_3_0_1tob1_4_0_1/packet/ClientboundPacketsb1_3.d.ts'
import type { ClientboundPacketsb1_4 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_4_0_1tob1_5_0_2/packet/ClientboundPacketsb1_4.d.ts'
import type { ServerboundPacketsb1_4 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_4_0_1tob1_5_0_2/packet/ServerboundPacketsb1_4.d.ts'
export class Protocolb1_3_0_1Tob1_4_0_1 extends StatelessProtocol<ClientboundPacketsb1_3, ClientboundPacketsb1_4, ServerboundPacketsb1_4, ServerboundPacketsb1_4> {
    constructor()
    init(arg0: UserConnection): void;
}