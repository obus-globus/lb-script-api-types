import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_4_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_2tor1_4_4_5/packet/ClientboundPackets1_4_2.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_2tor1_4_4_5/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_4_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_4_5tor1_4_6_7/packet/ClientboundPackets1_4_4.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
export class Protocolr1_4_2Tor1_4_4_5 extends StatelessProtocol<ClientboundPackets1_4_2, ClientboundPackets1_4_4, ServerboundPackets1_5_2, ServerboundPackets1_5_2> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    registerPackets(): void;
    // private rewriteEntityData(arg0: EntityData[]): void;
}