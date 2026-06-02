import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InventoryAction$Creative } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Creative.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class InventoryAction$Creative$Companion extends Object {
    performFillSlot(itemStack: ItemStack, slot: ItemSlot): InventoryAction$Creative;
    performThrow(itemStack: ItemStack): InventoryAction$Creative;
}