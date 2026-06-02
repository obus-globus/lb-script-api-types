import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsb1_5 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_5_0_2tob1_6_0_6/packet/ClientboundPacketsb1_5.d.ts'
import type { ServerboundPacketsb1_5 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_5_0_2tob1_6_0_6/packet/ServerboundPacketsb1_5.d.ts'
import type { ClientboundPacketsb1_7 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_7_0_3tob1_8_0_1/packet/ClientboundPacketsb1_7.d.ts'
import type { ServerboundPacketsb1_7 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_7_0_3tob1_8_0_1/packet/ServerboundPacketsb1_7.d.ts'
export class Protocolb1_5_0_2Tob1_6_0_6 extends StatelessProtocol<ClientboundPacketsb1_5, ClientboundPacketsb1_7, ServerboundPacketsb1_5, ServerboundPacketsb1_7> {
    constructor()
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}