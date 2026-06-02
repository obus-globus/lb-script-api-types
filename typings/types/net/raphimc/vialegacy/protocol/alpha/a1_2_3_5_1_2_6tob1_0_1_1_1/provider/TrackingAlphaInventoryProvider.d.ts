import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { AlphaInventoryProvider } from '../../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_3_5_1_2_6tob1_0_1_1_1/provider/AlphaInventoryProvider.d.ts'
export class TrackingAlphaInventoryProvider extends AlphaInventoryProvider {
    constructor()
    addToInventory(arg0: UserConnection, arg1: Item): void;
    getArmorInventoryItems(arg0: UserConnection): Item[];
    getContainerItems(arg0: UserConnection): Item[];
    getCraftingInventoryItems(arg0: UserConnection): Item[];
    getMainInventoryItems(arg0: UserConnection): Item[];
    usesInventoryTracker(): boolean;
}