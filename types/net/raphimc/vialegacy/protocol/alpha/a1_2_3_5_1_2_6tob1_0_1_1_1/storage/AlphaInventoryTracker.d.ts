import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { InventoryStorage } from '../../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_3_5_1_2_6tob1_0_1_1_1/storage/InventoryStorage.d.ts'
export class AlphaInventoryTracker extends StoredObject {
    constructor(arg0: UserConnection)
    readonly armorInventory: Item[];
    readonly craftingInventory: Item[];
    readonly creativeMode: boolean;
    readonly cursorItem: Item;
    // private inventoryStorage: InventoryStorage;
    readonly mainInventory: Item[];
    readonly openContainerItems: Item[];
    // private openWindowType: number;
    addItem(arg0: Item): void;
    getArmorInventory(): Item[];
    getCraftingInventory(): Item[];
    getCursorItem(): Item;
    getMainInventory(): Item[];
    getOpenContainerItems(): Item[];
    handleCreativeSetSlot(arg0: number, arg1: Item): void;
    // private isEmpty(arg0: Item[]): boolean;
    onBlockPlace(arg0: BlockPosition, arg1: number): void;
    // private onCraftingResultPickup(arg0: number, arg1: Item[]): void;
    onHandItemDrop(): void;
    onRespawn(): void;
    onWindowClick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Item): void;
    onWindowClose(): void;
    onWindowOpen(arg0: number, arg1: number): void;
    setArmorInventory(arg0: Item[]): void;
    setCraftingInventory(arg0: Item[]): void;
    setCreativeMode(arg0: boolean): void;
    setMainInventory(arg0: Item[]): void;
    setOpenContainerItems(arg0: Item[]): void;
    // private splitStack(arg0: Item, arg1: number): Item;
    // private updateCursorItem(): void;
    // private updateInventory(arg0: number, arg1: Item[]): void;
    // private updateInventorySlot(arg0: number, arg1: number, arg2: Item): void;
    // private updatePlayerInventory(): void;
    // private updatePlayerInventorySlot(arg0: number): void;
}