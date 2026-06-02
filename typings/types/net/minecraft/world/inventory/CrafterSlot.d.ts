import type { CrafterMenu } from '../../../../net/minecraft/world/inventory/CrafterMenu.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CrafterSlot extends Slot {
    constructor(container: ItemStack[], slot: number, x: number, y: number, menu: CrafterMenu)
    // private menu: CrafterMenu;
    mayPlace(itemStack: ItemStack): boolean;
    setChanged(): void;
}