import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Provider } from '../../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AlphaInventoryProvider extends Object implements Provider {
    constructor()
    addToInventory(arg0: UserConnection, arg1: Item): void;
    getArmorInventoryItems(arg0: UserConnection): Item[];
    getContainerItems(arg0: UserConnection): Item[];
    getCraftingInventoryItems(arg0: UserConnection): Item[];
    getHandItem(arg0: UserConnection): Item;
    getMainInventoryItems(arg0: UserConnection): Item[];
    usesInventoryTracker(): boolean;
}