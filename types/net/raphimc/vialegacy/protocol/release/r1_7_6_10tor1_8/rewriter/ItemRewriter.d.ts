import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ServerboundPackets1_8 } from '../../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_8.d.ts'
import type { LegacyItemRewriter } from '../../../../../../../net/raphimc/vialegacy/api/remapper/LegacyItemRewriter.d.ts'
import type { ClientboundPackets1_7_2 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ClientboundPackets1_7_2.d.ts'
import type { Protocolr1_7_6_10Tor1_8 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/Protocolr1_7_6_10Tor1_8.d.ts'
export class ItemRewriter extends LegacyItemRewriter<ClientboundPackets1_7_2, ServerboundPackets1_8, Protocolr1_7_6_10Tor1_8> {
    constructor(arg0: Protocolr1_7_6_10Tor1_8)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
}