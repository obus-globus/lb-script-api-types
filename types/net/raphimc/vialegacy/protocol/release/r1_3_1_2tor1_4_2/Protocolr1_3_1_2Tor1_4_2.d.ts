import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPackets1_3_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/packet/ClientboundPackets1_3_1.d.ts'
import type { ServerboundPackets1_3_1 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/packet/ServerboundPackets1_3_1.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/rewriter/ItemRewriter.d.ts'
import type { ClientboundPackets1_4_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_4_2tor1_4_4_5/packet/ClientboundPackets1_4_2.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
export class Protocolr1_3_1_2Tor1_4_2 extends StatelessProtocol<ClientboundPackets1_3_1, ClientboundPackets1_4_2, ServerboundPackets1_3_1, ServerboundPackets1_5_2> {
    constructor()
    readonly itemRewriter: ItemRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    registerPackets(): void;
    // private rewriteEntityData(arg0: EntityData[]): void;
    // private setMobHandItem(arg0: number, arg1: Item, arg2: PacketWrapper): void;
}