import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol1_11_1To1_12 } from '../../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/Protocol1_11_1To1_12.d.ts'
import type { ServerboundPackets1_12 } from '../../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ServerboundPackets1_12.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_12 extends ItemRewriter<ClientboundPackets1_9_3, ServerboundPackets1_12, Protocol1_11_1To1_12> {
    constructor(arg0: Protocol1_11_1To1_12)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}