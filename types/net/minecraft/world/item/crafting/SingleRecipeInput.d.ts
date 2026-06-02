import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
export class SingleRecipeInput extends Record implements RecipeInput {
    constructor(item: ItemStack)
    readonly item: ItemStack;
    equals(o: Object | null): boolean;
    getItem(index: number): ItemStack;
    hashCode(): number;
    isEmpty(): boolean;
    item(): ItemStack;
    size(): number;
    toString(): string;
}