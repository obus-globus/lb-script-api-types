import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeDisplayEntry } from '../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
export interface ServerRecipeBook$DisplayResolver extends Object{
    displaysForRecipe(id: ResourceKey<Recipe<Object>>, output: (param0: RecipeDisplayEntry) => void): void;
}