import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_5_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ClientboundPackets1_5_2.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_6_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_1tor1_6_2/packet/ClientboundPackets1_6_1.d.ts'
import type { ServerboundPackets1_6_4 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/packet/ServerboundPackets1_6_4.d.ts'
export class Protocolr1_5_2Tor1_6_1 extends StatelessProtocol<ClientboundPackets1_5_2, ClientboundPackets1_6_1, ServerboundPackets1_5_2, ServerboundPackets1_6_4> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    // private handleWolfEntityData(arg0: number, arg1: EntityData[], arg2: PacketWrapper): void;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}