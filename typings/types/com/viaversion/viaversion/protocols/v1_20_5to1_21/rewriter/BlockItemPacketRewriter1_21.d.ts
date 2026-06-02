import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { Protocol1_20_5To1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/Protocol1_20_5To1_21.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
export class BlockItemPacketRewriter1_21 extends StructuredItemRewriter<ClientboundPacket1_20_5, ServerboundPacket1_20_5, Protocol1_20_5To1_21> {
    static MARKER_KEY: string;
    static downgradeItemData(paramarg0: Item): void;
    static updateItemData(paramarg0: Item): void;
    constructor(arg0: Protocol1_20_5To1_21)
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    // private itemToJubeboxSong(arg0: number): number;
    registerPackets(): void;
}