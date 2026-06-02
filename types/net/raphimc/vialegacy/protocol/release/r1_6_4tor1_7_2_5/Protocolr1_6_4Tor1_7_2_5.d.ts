import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { StatelessTransitionProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessTransitionProtocol.d.ts'
import type { ClientboundPackets1_6_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/packet/ClientboundPackets1_6_4.d.ts'
import type { ServerboundPackets1_6_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/packet/ServerboundPackets1_6_4.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_7_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ClientboundPackets1_7_2.d.ts'
import type { ServerboundPackets1_7_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ServerboundPackets1_7_2.d.ts'
export class Protocolr1_6_4Tor1_7_2_5 extends StatelessTransitionProtocol<ClientboundPackets1_6_4, ClientboundPackets1_7_2, ServerboundPackets1_6_4, ServerboundPackets1_7_2> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    // private rewriteEntityData(arg0: UserConnection, arg1: EntityData[]): void;
}