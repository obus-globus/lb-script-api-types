import type { Protocol1_21_5To_25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/Protocol1_21_5To_25w14craftmine.d.ts'
import type { ServerboundPacket25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ServerboundPacket25w14craftmine.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { StructuredItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/StructuredItemRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockItemPacketRewriter25w14craftmine extends StructuredItemRewriter<ClientboundPacket1_21_5, ServerboundPacket25w14craftmine, Protocol1_21_5To_25w14craftmine> {
    static MARKER_KEY: string;
    static NEW_CRAFTING_SLOTS: number;
    static NEW_DATA_TO_REMOVE: (Object | null)[];
    static PLAYER_INVENTORY_ID: number;
    static addCraftingSlot(paramarg0: number): number;
    static addCraftingSlots(paramarg0: PacketWrapper): void;
    static downgradeItemData(paramarg0: Item, paramarg1: StructuredDataContainer): void;
    static removeCraftingSlot(paramarg0: number): number;
    static removeCraftingSlots(paramarg0: PacketWrapper): void;
    static upgradeItemData(paramarg0: Item, paramarg1: StructuredDataContainer): void;
    constructor(arg0: Protocol1_21_5To_25w14craftmine)
    handleItemDataComponentsToClient(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    handleItemDataComponentsToServer(arg0: UserConnection, arg1: Item, arg2: StructuredDataContainer): void;
    registerPackets(): void;
}