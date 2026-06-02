import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { Protocol1_21_9To1_21_11 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/Protocol1_21_9To1_21_11.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
export class BlockItemPacketRewriter1_21_11 extends StructuredItemRewriter<ClientboundPacket1_21_9, ServerboundPacket1_21_9, Protocol1_21_9To1_21_11> {
    static MARKER_KEY: string;
    static downgradeData(paramarg0: Item, paramarg1: StructuredDataContainer): void;
    static upgradeData(paramarg0: Item, paramarg1: StructuredDataContainer): void;
    constructor(arg0: Protocol1_21_9To1_21_11)
    // private appendItemDataFixComponents(arg0: UserConnection, arg1: Item): void;
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    registerPackets(): void;
}