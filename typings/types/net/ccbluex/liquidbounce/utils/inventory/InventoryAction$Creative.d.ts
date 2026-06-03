import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryAction$Creative$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Creative$Companion.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class InventoryAction$Creative extends Record implements InventoryAction {
    static Companion: InventoryAction$Creative$Companion;
    static performFillSlot(itemStack: ItemStack, slot: ItemSlot): InventoryAction$Creative;
    static performThrow(itemStack: ItemStack): InventoryAction$Creative;
    constructor(itemStack: ItemStack, slot: ItemSlot | null)
    // private itemStack: ItemStack;
    /*not mapped: */ itemStack(): ItemStack;
    // private slot: ItemSlot | null;
    /*not mapped: */ slot(): ItemSlot | null;
    canPerformAction(inventoryConstraints: InventoryConstraints): boolean;
    component1(): ItemStack;
    component2(): ItemSlot | null;
    copy(itemStack: ItemStack, slot: ItemSlot | null): InventoryAction$Creative;
    equals(other: Object | null): boolean;
    hashCode(): number;
    performAction(): boolean;
    requiresPlayerInventoryOpen(): boolean;
    toString(): string;
}