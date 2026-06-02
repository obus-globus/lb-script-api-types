import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { IdAndData } from '../../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsa1_0_15 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_0_15toa1_0_16_2/packet/ClientboundPacketsa1_0_15.d.ts'
import type { ServerboundPacketsa1_0_15 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_0_15toa1_0_16_2/packet/ServerboundPacketsa1_0_15.d.ts'
import type { ClientboundPacketsc0_28 } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/packet/ClientboundPacketsc0_28.d.ts'
import type { ServerboundPacketsc0_28 } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/packet/ServerboundPacketsc0_28.d.ts'
export class Protocolc0_28_30Toa1_0_15 extends StatelessProtocol<ClientboundPacketsc0_28, ClientboundPacketsa1_0_15, ServerboundPacketsc0_28, ServerboundPacketsa1_0_15> {
    constructor()
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    // private sendBlockChange(arg0: UserConnection, arg1: BlockPosition, arg2: IdAndData): void;
    // private sendChatMessage(arg0: UserConnection, arg1: string): void;
}