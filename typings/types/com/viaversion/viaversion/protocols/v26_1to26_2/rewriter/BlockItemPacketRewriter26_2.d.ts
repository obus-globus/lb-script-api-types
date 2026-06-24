import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { StructuredDataKeys26_2 } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys26_2.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPacket26_1.d.ts'
import type { Protocol26_1To26_2 } from '../../../../../../com/viaversion/viaversion/protocols/v26_1to26_2/Protocol26_1To26_2.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
export class BlockItemPacketRewriter26_2 extends StructuredItemRewriter<ClientboundPacket26_1, ServerboundPacket26_1, Protocol26_1To26_2> {
    static MARKER_KEY: string;
    static downgradeData(paramarg0: StructuredDataKeys26_2, paramarg1: StructuredDataContainer): void;
    static upgradeData(paramarg0: StructuredDataContainer): void;
    constructor(arg0: Protocol26_1To26_2)
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
}