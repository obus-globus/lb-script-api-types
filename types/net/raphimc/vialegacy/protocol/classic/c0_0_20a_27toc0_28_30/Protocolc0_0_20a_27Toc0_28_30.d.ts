import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsc0_20a } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_0_20a_27toc0_28_30/packet/ClientboundPacketsc0_20a.d.ts'
import type { ClientboundPacketsc0_28 } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/packet/ClientboundPacketsc0_28.d.ts'
import type { ServerboundPacketsc0_28 } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/packet/ServerboundPacketsc0_28.d.ts'
export class Protocolc0_0_20a_27Toc0_28_30 extends StatelessProtocol<ClientboundPacketsc0_20a, ClientboundPacketsc0_28, ServerboundPacketsc0_28, ServerboundPacketsc0_28> {
    constructor()
    init(arg0: UserConnection): void;
}