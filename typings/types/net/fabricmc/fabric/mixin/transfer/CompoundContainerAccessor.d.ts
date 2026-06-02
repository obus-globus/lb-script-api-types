import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface CompoundContainerAccessor extends Object{
    fabric_getContainer1(): ItemStack[];
    fabric_getContainer2(): ItemStack[];
}