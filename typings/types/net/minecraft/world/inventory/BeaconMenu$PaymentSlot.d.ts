import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BeaconMenu$PaymentSlot extends Slot {
    constructor(container: ItemStack[], slot: number, x: number, y: number)
    getMaxStackSize(): number;
    getMaxStackSize(itemStack: ItemStack): number;
    mayPlace(itemStack: ItemStack): boolean;
}