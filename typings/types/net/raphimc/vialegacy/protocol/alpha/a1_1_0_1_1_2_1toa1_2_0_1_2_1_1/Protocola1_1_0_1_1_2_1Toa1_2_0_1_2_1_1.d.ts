import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsa1_1_0 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_1_0_1_1_2_1toa1_2_0_1_2_1_1/packet/ClientboundPacketsa1_1_0.d.ts'
import type { ServerboundPacketsa1_1_0 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_1_0_1_1_2_1toa1_2_0_1_2_1_1/packet/ServerboundPacketsa1_1_0.d.ts'
import type { ClientboundPacketsa1_2_0 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_0_1_2_1_1toa1_2_2/packet/ClientboundPacketsa1_2_0.d.ts'
import type { ServerboundPacketsa1_2_0 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_0_1_2_1_1toa1_2_2/packet/ServerboundPacketsa1_2_0.d.ts'
export class Protocola1_1_0_1_1_2_1Toa1_2_0_1_2_1_1 extends StatelessProtocol<ClientboundPacketsa1_1_0, ClientboundPacketsa1_2_0, ServerboundPacketsa1_1_0, ServerboundPacketsa1_2_0> {
    constructor()
    init(arg0: UserConnection): void;
    registerPackets(): void;
}