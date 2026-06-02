import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol1_21_2To1_21_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/Protocol1_21_2To1_21_4.d.ts'
import type { ServerboundPacket1_21_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/packet/ServerboundPacket1_21_4.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
export class BlockItemPacketRewriter1_21_4 extends StructuredItemRewriter<ClientboundPacket1_21_2, ServerboundPacket1_21_4, Protocol1_21_2To1_21_4> {
    static MARKER_KEY: string;
    static downgradeItemData(paramarg0: Item): void;
    static updateItemData(paramarg0: Item): void;
    constructor(arg0: Protocol1_21_2To1_21_4)
    // private appendItemDataFixComponents(arg0: UserConnection, arg1: Item): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
}