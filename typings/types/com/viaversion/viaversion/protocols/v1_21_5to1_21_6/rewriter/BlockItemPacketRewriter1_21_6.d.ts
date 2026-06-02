import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { Protocol1_21_5To1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/Protocol1_21_5To1_21_6.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
export class BlockItemPacketRewriter1_21_6 extends StructuredItemRewriter<ClientboundPacket1_21_5, ServerboundPacket1_21_6, Protocol1_21_5To1_21_6> {
    static MARKER_KEY: string;
    static downgradeItemData(paramarg0: Item): void;
    static upgradeItemData(paramarg0: Item): void;
    constructor(arg0: Protocol1_21_5To1_21_6)
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
}