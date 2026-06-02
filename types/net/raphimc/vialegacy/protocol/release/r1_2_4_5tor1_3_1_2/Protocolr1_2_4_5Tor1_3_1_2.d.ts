import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_2_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/packet/ClientboundPackets1_2_4.d.ts'
import type { ServerboundPackets1_2_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/packet/ServerboundPackets1_2_4.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_3_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/packet/ClientboundPackets1_3_1.d.ts'
import type { ServerboundPackets1_3_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/packet/ServerboundPackets1_3_1.d.ts'
export class Protocolr1_2_4_5Tor1_3_1_2 extends StatelessProtocol<ClientboundPackets1_2_4, ClientboundPackets1_3_1, ServerboundPackets1_2_4, ServerboundPackets1_3_1> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    // private handleEntityDataList(arg0: number, arg1: EntityData[], arg2: PacketWrapper): void;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}