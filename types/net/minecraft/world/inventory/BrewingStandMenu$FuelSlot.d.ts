import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BrewingStandMenu$FuelSlot extends Slot {
    static mayPlaceItem(paramitemStack: ItemStack): boolean;
    constructor(container: ItemStack[], slot: number, x: number, y: number)
    getNoItemIcon(): Identifier;
    isActive(): boolean;
    mayPlace(itemStack: ItemStack): boolean;
}