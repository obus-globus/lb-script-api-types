import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { Protocol1_13_2To1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/Protocol1_13_2To1_14.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_14 extends ItemRewriter<ClientboundPackets1_13, ServerboundPackets1_14, Protocol1_13_2To1_14> {
    constructor(arg0: Protocol1_13_2To1_14)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}