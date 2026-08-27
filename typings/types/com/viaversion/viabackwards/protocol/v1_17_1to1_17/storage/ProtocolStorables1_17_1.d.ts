import type { InventoryStateIds } from '../../../../../../com/viaversion/viabackwards/protocol/v1_17_1to1_17/storage/InventoryStateIds.d.ts'
import type { PlayerLastCursorItem } from '../../../../../../com/viaversion/viabackwards/protocol/v1_17to1_16_4/storage/PlayerLastCursorItem.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_17_1 extends ProtocolStorablesBase {
    constructor()
    // private inventoryStateIds: InventoryStateIds;
    // private playerLastCursorItem: PlayerLastCursorItem;
    inventoryStateIds(): InventoryStateIds;
    playerLastCursorItem(): PlayerLastCursorItem;
}