import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RecipeBuilder } from '../../../../net/minecraft/data/recipes/RecipeBuilder.d.ts'
import type { RecipeProvider } from '../../../../net/minecraft/data/recipes/RecipeProvider.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export interface RecipeProvider$FamilyCraftingRecipeProvider extends Object{
    create(context: RecipeProvider, result: ItemLike, base: ItemLike): RecipeBuilder;
}