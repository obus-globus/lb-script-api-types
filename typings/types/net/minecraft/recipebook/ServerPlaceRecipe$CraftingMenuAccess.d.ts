import type { Object } from '../../../java/lang/Object.d.ts'
import type { StackedItemContents } from '../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
export interface ServerPlaceRecipe$CraftingMenuAccess<T extends Recipe<Object>> extends Object{
    clearCraftingContent(): void;
    fillCraftSlotsStackedContents(stackedContents: StackedItemContents): void;
    recipeMatches(recipe: RecipeHolder<T>): boolean;
}