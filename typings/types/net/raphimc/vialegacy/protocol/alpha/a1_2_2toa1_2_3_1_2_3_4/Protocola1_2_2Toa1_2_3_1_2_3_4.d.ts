import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsa1_2_2 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_2toa1_2_3_1_2_3_4/packet/ClientboundPacketsa1_2_2.d.ts'
import type { ServerboundPacketsa1_2_2 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_2toa1_2_3_1_2_3_4/packet/ServerboundPacketsa1_2_2.d.ts'
import type { ClientboundPacketsa1_2_3 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_3_1_2_3_4toa1_2_3_5_1_2_6/packet/ClientboundPacketsa1_2_3.d.ts'
import type { ServerboundPacketsa1_2_6 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_3_5_1_2_6tob1_0_1_1_1/packet/ServerboundPacketsa1_2_6.d.ts'
export class Protocola1_2_2Toa1_2_3_1_2_3_4 extends StatelessProtocol<ClientboundPacketsa1_2_2, ClientboundPacketsa1_2_3, ServerboundPacketsa1_2_2, ServerboundPacketsa1_2_6> {
    constructor()
    init(arg0: UserConnection): void;
    registerPackets(): void;
}