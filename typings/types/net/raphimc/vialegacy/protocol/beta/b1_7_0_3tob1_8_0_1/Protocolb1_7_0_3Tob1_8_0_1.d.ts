import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsb1_7 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_7_0_3tob1_8_0_1/packet/ClientboundPacketsb1_7.d.ts'
import type { ServerboundPacketsb1_7 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_7_0_3tob1_8_0_1/packet/ServerboundPacketsb1_7.d.ts'
import type { ClientboundPacketsb1_8 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/packet/ClientboundPacketsb1_8.d.ts'
import type { ServerboundPacketsb1_8 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/packet/ServerboundPacketsb1_8.d.ts'
export class Protocolb1_7_0_3Tob1_8_0_1 extends StatelessProtocol<ClientboundPacketsb1_7, ClientboundPacketsb1_8, ServerboundPacketsb1_7, ServerboundPacketsb1_8> {
    constructor()
    init(arg0: UserConnection): void;
    // private isSword(arg0: Item): boolean;
    registerPackets(): void;
}