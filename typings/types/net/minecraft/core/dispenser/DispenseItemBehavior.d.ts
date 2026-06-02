import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockSource } from '../../../../net/minecraft/core/dispenser/BlockSource.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface DispenseItemBehavior extends Object{
    dispense(source: BlockSource, dispensed: ItemStack): ItemStack;
}