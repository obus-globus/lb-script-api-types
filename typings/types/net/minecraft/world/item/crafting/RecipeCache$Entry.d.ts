import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CraftingRecipe } from '../../../../../net/minecraft/world/item/crafting/CraftingRecipe.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
export class RecipeCache$Entry extends Record {
    private constructor(key: ItemStack[], width: number, height: number, value: RecipeHolder<CraftingRecipe>)
    // private height: number;
    // private key: ItemStack[];
    // private value: RecipeHolder<CraftingRecipe>;
    // private width: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    key(): ItemStack[];
    matches(input: CraftingInput): boolean;
    toString(): string;
    value(): RecipeHolder<CraftingRecipe>;
    width(): number;
}