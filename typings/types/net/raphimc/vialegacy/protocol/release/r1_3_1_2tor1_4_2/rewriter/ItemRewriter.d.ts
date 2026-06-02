import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { Protocolr1_3_1_2Tor1_4_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/Protocolr1_3_1_2Tor1_4_2.d.ts'
import type { ClientboundPackets1_3_1 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_3_1_2tor1_4_2/packet/ClientboundPackets1_3_1.d.ts'
import type { ServerboundPackets1_5_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_5_2tor1_6_1/packet/ServerboundPackets1_5_2.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_3_1, ServerboundPackets1_5_2, Protocolr1_3_1_2Tor1_4_2> {
    constructor(arg0: Protocolr1_3_1_2Tor1_4_2)
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}