import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsb1_4 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_4_0_1tob1_5_0_2/packet/ClientboundPacketsb1_4.d.ts'
import type { ServerboundPacketsb1_4 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_4_0_1tob1_5_0_2/packet/ServerboundPacketsb1_4.d.ts'
import type { ClientboundPacketsb1_5 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_5_0_2tob1_6_0_6/packet/ClientboundPacketsb1_5.d.ts'
import type { ServerboundPacketsb1_5 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_5_0_2tob1_6_0_6/packet/ServerboundPacketsb1_5.d.ts'
export class Protocolb1_4_0_1Tob1_5_0_2 extends StatelessProtocol<ClientboundPacketsb1_4, ClientboundPacketsb1_5, ServerboundPacketsb1_4, ServerboundPacketsb1_5> {
    constructor()
    init(arg0: UserConnection): void;
    registerPackets(): void;
    // private rewriteEntityData(arg0: EntityData[]): void;
}