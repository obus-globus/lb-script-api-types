import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_6_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_1tor1_6_2/packet/ClientboundPackets1_6_1.d.ts'
import type { ClientboundPackets1_6_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/packet/ClientboundPackets1_6_4.d.ts'
import type { ServerboundPackets1_6_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/packet/ServerboundPackets1_6_4.d.ts'
export class Protocolr1_6_1Tor1_6_2 extends StatelessProtocol<ClientboundPackets1_6_1, ClientboundPackets1_6_4, ServerboundPackets1_6_4, ServerboundPackets1_6_4> {
    constructor()
    init(arg0: UserConnection): void;
    registerPackets(): void;
}