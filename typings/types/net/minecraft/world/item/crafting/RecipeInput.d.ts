import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface RecipeInput extends Object{
    getItem(index: number): ItemStack;
    isEmpty(): boolean;
    size(): number;
}