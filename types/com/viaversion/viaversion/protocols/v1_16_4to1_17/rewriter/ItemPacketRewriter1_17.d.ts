import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_16_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_1to1_16_2/packet/ClientboundPackets1_16_2.d.ts'
import type { Protocol1_16_4To1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/Protocol1_16_4To1_17.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class ItemPacketRewriter1_17 extends ItemRewriter<ClientboundPackets1_16_2, ServerboundPackets1_17, Protocol1_16_4To1_17> {
    constructor(arg0: Protocol1_16_4To1_17)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}