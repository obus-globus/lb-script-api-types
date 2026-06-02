import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsb1_2 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_2_0_2tob1_3_0_1/packet/ClientboundPacketsb1_2.d.ts'
import type { ServerboundPacketsb1_2 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_2_0_2tob1_3_0_1/packet/ServerboundPacketsb1_2.d.ts'
import type { ClientboundPacketsb1_3 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_3_0_1tob1_4_0_1/packet/ClientboundPacketsb1_3.d.ts'
import type { ServerboundPacketsb1_4 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_4_0_1tob1_5_0_2/packet/ServerboundPacketsb1_4.d.ts'
export class Protocolb1_2_0_2Tob1_3_0_1 extends StatelessProtocol<ClientboundPacketsb1_2, ClientboundPacketsb1_3, ServerboundPacketsb1_2, ServerboundPacketsb1_4> {
    static sendBlockDigPacket(paramarg0: UserConnection, paramarg1: number, paramarg2: BlockPosition, paramarg3: number): void;
    constructor()
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    // private rewriteEntityData(arg0: EntityData[]): void;
}