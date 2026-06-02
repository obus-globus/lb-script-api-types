import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingBookCategory } from '../../../../../net/minecraft/world/item/crafting/CraftingBookCategory.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
export interface CraftingRecipe extends Object, Recipe<CraftingInput>{
    category(): CraftingBookCategory;
    display(): RecipeDisplay[];
    getRemainingItems(input: CraftingInput): ItemStack[];
    getSerializer(): RecipeSerializer<CraftingRecipe>;
    getType(): RecipeType<CraftingRecipe>;
    isSpecial(): boolean;
    recipeBookCategory(): RecipeBookCategory;
}