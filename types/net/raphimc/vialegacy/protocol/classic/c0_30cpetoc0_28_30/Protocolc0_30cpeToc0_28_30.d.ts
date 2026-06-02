import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsc0_28 } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/packet/ClientboundPacketsc0_28.d.ts'
import type { ServerboundPacketsc0_28 } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/packet/ServerboundPacketsc0_28.d.ts'
import type { ClientboundPacketsc0_30cpe } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_30cpetoc0_28_30/packet/ClientboundPacketsc0_30cpe.d.ts'
import type { ServerboundPacketsc0_30cpe } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_30cpetoc0_28_30/packet/ServerboundPacketsc0_30cpe.d.ts'
export class Protocolc0_30cpeToc0_28_30 extends StatelessProtocol<ClientboundPacketsc0_30cpe, ClientboundPacketsc0_28, ServerboundPacketsc0_30cpe, ServerboundPacketsc0_28> {
    constructor()
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}