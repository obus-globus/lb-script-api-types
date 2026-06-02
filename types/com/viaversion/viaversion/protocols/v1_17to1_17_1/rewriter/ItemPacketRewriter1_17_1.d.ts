import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ClientboundPackets1_17.d.ts'
import type { ServerboundPackets1_17 } from '../../../../../../com/viaversion/viaversion/protocols/v1_16_4to1_17/packet/ServerboundPackets1_17.d.ts'
import type { Protocol1_17To1_17_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_17to1_17_1/Protocol1_17To1_17_1.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ItemPacketRewriter1_17_1 extends ItemRewriter<ClientboundPackets1_17, ServerboundPackets1_17, Protocol1_17To1_17_1> {
    constructor(arg0: Protocol1_17To1_17_1)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    // private replaceInvalidEnchantments(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private restoreInvalidEnchantments(arg0: Map$Entry<string, Tag>[], arg1: string): void;
}