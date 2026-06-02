import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/packet/ClientboundPackets1_1.d.ts'
import type { ServerboundPackets1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/packet/ServerboundPackets1_1.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_2_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/packet/ClientboundPackets1_2_1.d.ts'
import type { ServerboundPackets1_2_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_1_3tor1_2_4_5/packet/ServerboundPackets1_2_1.d.ts'
export class Protocolr1_1Tor1_2_1_3 extends StatelessProtocol<ClientboundPackets1_1, ClientboundPackets1_2_1, ServerboundPackets1_1, ServerboundPackets1_2_1> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    // private handleRespawn(arg0: number, arg1: UserConnection): void;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    // private sendEntityHeadLook(arg0: number, arg1: number, arg2: PacketWrapper): void;
}