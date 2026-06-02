import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { PotionBrewing } from '../../../../net/minecraft/world/item/alchemy/PotionBrewing.d.ts'
export class BrewingStandMenu$IngredientsSlot extends Slot {
    constructor(potionBrewing: PotionBrewing, container: ItemStack[], slot: number, x: number, y: number)
    // private potionBrewing: PotionBrewing;
    mayPlace(itemStack: ItemStack): boolean;
}