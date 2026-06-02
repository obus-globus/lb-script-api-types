import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InventoryStorage extends Object implements StorableObject {
    static CHEST_WID: number;
    static FURNACE_WID: number;
    static WORKBENCH_WID: number;
    constructor()
    armorInventory: Item[];
    containers: Map<BlockPosition, Item[]>;
    craftingInventory: Item[];
    handItem: Item;
    mainInventory: Item[];
    openContainerPos: BlockPosition;
    selectedHotbarSlot: number;
    onRemove(): void;
    resetPlayerInventory(): void;
    unload(arg0: number, arg1: number): void;
}