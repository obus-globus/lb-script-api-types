import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsc0_19a } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_0_19a_06toc0_0_20a_27/packet/ClientboundPacketsc0_19a.d.ts'
import type { ServerboundPacketsc0_19a } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_0_19a_06toc0_0_20a_27/packet/ServerboundPacketsc0_19a.d.ts'
export class Protocolc0_0_18a_02Toc0_0_19a_06 extends StatelessProtocol<ClientboundPacketsc0_19a, ClientboundPacketsc0_19a, ServerboundPacketsc0_19a, ServerboundPacketsc0_19a> {
    constructor()
    init(arg0: UserConnection): void;
}