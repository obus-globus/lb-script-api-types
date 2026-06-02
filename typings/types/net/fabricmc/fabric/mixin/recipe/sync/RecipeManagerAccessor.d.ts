import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RecipeMap } from '../../../../../../net/minecraft/world/item/crafting/RecipeMap.d.ts'
export interface RecipeManagerAccessor extends Object{
    getRecipes(): RecipeMap;
}