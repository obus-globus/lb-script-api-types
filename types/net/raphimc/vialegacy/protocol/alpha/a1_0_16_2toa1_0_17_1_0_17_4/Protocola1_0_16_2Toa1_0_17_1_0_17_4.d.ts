import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsa1_0_16 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_0_16_2toa1_0_17_1_0_17_4/packet/ClientboundPacketsa1_0_16.d.ts'
import type { ClientboundPacketsa1_0_17 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_0_17_1_0_17_4toa1_1_0_1_1_2_1/packet/ClientboundPacketsa1_0_17.d.ts'
import type { ServerboundPacketsa1_0_17 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_0_17_1_0_17_4toa1_1_0_1_1_2_1/packet/ServerboundPacketsa1_0_17.d.ts'
export class Protocola1_0_16_2Toa1_0_17_1_0_17_4 extends StatelessProtocol<ClientboundPacketsa1_0_16, ClientboundPacketsa1_0_17, ServerboundPacketsa1_0_17, ServerboundPacketsa1_0_17> {
    constructor()
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}