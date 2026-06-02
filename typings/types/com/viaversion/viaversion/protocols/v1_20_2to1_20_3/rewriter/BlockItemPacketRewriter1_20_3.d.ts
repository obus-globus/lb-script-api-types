import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol1_20_2To1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/Protocol1_20_2To1_20_3.d.ts'
import type { ServerboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ServerboundPacket1_20_3.d.ts'
import type { ClientboundPacket1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPacket1_20_2.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class BlockItemPacketRewriter1_20_3 extends ItemRewriter<ClientboundPacket1_20_2, ServerboundPacket1_20_3, Protocol1_20_2To1_20_3> {
    constructor(arg0: Protocol1_20_2To1_20_3)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    // private updatePageTag(arg0: StringTag): void;
}