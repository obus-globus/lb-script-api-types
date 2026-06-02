import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
export class SmithingRecipeInput extends Record implements RecipeInput {
    constructor(template: ItemStack, base: ItemStack, addition: ItemStack)
    // private addition: ItemStack;
    // private base: ItemStack;
    // private template: ItemStack;
    addition(): ItemStack;
    base(): ItemStack;
    equals(o: Object | null): boolean;
    getItem(index: number): ItemStack;
    hashCode(): number;
    isEmpty(): boolean;
    isEmpty(): boolean;
    size(): number;
    template(): ItemStack;
    toString(): string;
}