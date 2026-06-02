import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemCombinerMenuSlotDefinition$Builder } from '../../../../net/minecraft/world/inventory/ItemCombinerMenuSlotDefinition$Builder.d.ts'
import type { ItemCombinerMenuSlotDefinition$SlotDefinition } from '../../../../net/minecraft/world/inventory/ItemCombinerMenuSlotDefinition$SlotDefinition.d.ts'
export class ItemCombinerMenuSlotDefinition extends Object {
    static create(): ItemCombinerMenuSlotDefinition$Builder;
    private constructor(inputSlots: ItemCombinerMenuSlotDefinition$SlotDefinition[], resultSlot: ItemCombinerMenuSlotDefinition$SlotDefinition)
    readonly resultSlot: ItemCombinerMenuSlotDefinition$SlotDefinition;
    readonly slots: ItemCombinerMenuSlotDefinition$SlotDefinition[];
    getNumOfInputSlots(): number;
    getResultSlot(): ItemCombinerMenuSlotDefinition$SlotDefinition;
    getResultSlotIndex(): number;
    getSlot(index: number): ItemCombinerMenuSlotDefinition$SlotDefinition;
    getSlots(): ItemCombinerMenuSlotDefinition$SlotDefinition[];
}