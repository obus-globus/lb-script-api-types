import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ShulkerBoxSlot extends Slot {
    constructor(container: ItemStack[], slot: number, x: number, y: number)
    mayPlace(itemStack: ItemStack): boolean;
}