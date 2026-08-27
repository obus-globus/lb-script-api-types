import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InventoryStorage extends Object implements StorableObject {
    static CHEST_WID: number;
    static FURNACE_WID: number;
    static WORKBENCH_WID: number;
    constructor()
    readonly armorInventory: Item[];
    readonly containers: JavaMap<BlockPosition, Item[]>;
    readonly craftingInventory: Item[];
    readonly handItem: Item;
    readonly mainInventory: Item[];
    readonly openContainerPos: BlockPosition;
    readonly selectedHotbarSlot: number;
    getArmorInventory(): Item[];
    getContainers(): JavaMap<BlockPosition, Item[]>;
    getCraftingInventory(): Item[];
    getHandItem(): Item;
    getMainInventory(): Item[];
    getOpenContainerPos(): BlockPosition;
    getSelectedHotbarSlot(): number;
    onRemove(): void;
    resetPlayerInventory(): void;
    setArmorInventory(arg0: Item[]): void;
    setCraftingInventory(arg0: Item[]): void;
    setHandItem(arg0: Item): void;
    setMainInventory(arg0: Item[]): void;
    setOpenContainerPos(arg0: BlockPosition): void;
    setSelectedHotbarSlot(arg0: number): void;
    unload(arg0: number, arg1: number): void;
}