import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol1_8To1_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/Protocol1_8To1_9.d.ts'
import type { ClientboundPackets1_8 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_8.d.ts'
import type { ServerboundPackets1_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_9.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ItemPacketRewriter1_9 extends ItemRewriter<ClientboundPackets1_8, ServerboundPackets1_9, Protocol1_8To1_9> {
    constructor(arg0: Protocol1_8To1_9)
    // private viaFabricPlus$itemAttributes: Map<Object | null, Object | null>;
    // private viaFabricPlus$itemIdentifiers: { [key: string]: any };
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}