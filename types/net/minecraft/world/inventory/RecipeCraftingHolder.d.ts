import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
export interface RecipeCraftingHolder extends Object{
    awardUsedRecipes(player: Player, itemStacks: ItemStack[]): void;
    getRecipeUsed(): RecipeHolder<Object>;
    setRecipeUsed(player: ServerPlayer, recipe: RecipeHolder<Object>): boolean;
    setRecipeUsed(recipeUsed: RecipeHolder<Object>): void;
}