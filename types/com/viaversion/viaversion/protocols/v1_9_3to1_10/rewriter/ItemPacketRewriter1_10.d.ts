import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ClientboundPackets1_9_3.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
import type { Protocol1_9_3To1_10 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_3to1_10/Protocol1_9_3To1_10.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_10 extends ItemRewriter<ClientboundPackets1_9_3, ServerboundPackets1_9_3, Protocol1_9_3To1_10> {
    constructor(arg0: Protocol1_9_3To1_10)
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}