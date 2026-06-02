import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemCombinerMenuSlotDefinition } from '../../../../net/minecraft/world/inventory/ItemCombinerMenuSlotDefinition.d.ts'
import type { ItemCombinerMenuSlotDefinition$SlotDefinition } from '../../../../net/minecraft/world/inventory/ItemCombinerMenuSlotDefinition$SlotDefinition.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemCombinerMenuSlotDefinition$Builder extends Object {
    constructor()
    // private inputSlots: ItemCombinerMenuSlotDefinition$SlotDefinition[];
    // private resultSlot: ItemCombinerMenuSlotDefinition$SlotDefinition;
    build(): ItemCombinerMenuSlotDefinition;
    withResultSlot(slotIndex: number, xPlacement: number, yPlacement: number): ItemCombinerMenuSlotDefinition$Builder;
    withSlot(slotIndex: number, xPlacement: number, yPlacement: number, mayPlace: (param0: ItemStack) => kotlin.Boolean): ItemCombinerMenuSlotDefinition$Builder;
}