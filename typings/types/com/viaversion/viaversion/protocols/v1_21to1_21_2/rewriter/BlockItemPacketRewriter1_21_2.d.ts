import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { Protocol1_21To1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/Protocol1_21To1_21_2.d.ts'
import type { ServerboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ServerboundPacket1_21_2.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockItemPacketRewriter1_21_2 extends StructuredItemRewriter<ClientboundPacket1_21, ServerboundPacket1_21_2, Protocol1_21To1_21_2> {
    static MARKER_KEY: string;
    static NEW_DATA_TO_REMOVE: StructuredDataKey<Object>[];
    static downgradeItemData(paramarg0: Item): void;
    static updateItemData(paramarg0: Item): void;
    constructor(arg0: Protocol1_21To1_21_2)
    // private byteToVarInt(arg0: PacketWrapper): void;
    // private convertServerboundRecipeDisplayId(arg0: PacketWrapper): void;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    registerPackets(): void;
    // private unsignedByteToVarInt(arg0: PacketWrapper): void;
    // private varIntToByte(arg0: PacketWrapper): void;
}