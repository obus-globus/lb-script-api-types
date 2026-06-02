import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsc0_15a } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_0_15a_1toc0_0_16a_02/packet/ClientboundPacketsc0_15a.d.ts'
import type { ServerboundPacketsc0_15a } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_0_15a_1toc0_0_16a_02/packet/ServerboundPacketsc0_15a.d.ts'
import type { ClientboundPacketsc0_19a } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_0_19a_06toc0_0_20a_27/packet/ClientboundPacketsc0_19a.d.ts'
import type { ServerboundPacketsc0_19a } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_0_19a_06toc0_0_20a_27/packet/ServerboundPacketsc0_19a.d.ts'
export class Protocolc0_0_15a_1Toc0_0_16a_02 extends StatelessProtocol<ClientboundPacketsc0_15a, ClientboundPacketsc0_19a, ServerboundPacketsc0_15a, ServerboundPacketsc0_19a> {
    constructor()
    init(arg0: UserConnection): void;
    registerPackets(): void;
}