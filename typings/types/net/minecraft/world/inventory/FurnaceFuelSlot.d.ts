import type { AbstractFurnaceMenu } from '../../../../net/minecraft/world/inventory/AbstractFurnaceMenu.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FurnaceFuelSlot extends Slot {
    static isBucket(paramitemStack: ItemStack): boolean;
    constructor(menu: AbstractFurnaceMenu, container: ItemStack[], slot: number, x: number, y: number)
    // private menu: AbstractFurnaceMenu;
    getMaxStackSize(): number;
    getMaxStackSize(itemStack: ItemStack): number;
    mayPlace(itemStack: ItemStack): boolean;
}