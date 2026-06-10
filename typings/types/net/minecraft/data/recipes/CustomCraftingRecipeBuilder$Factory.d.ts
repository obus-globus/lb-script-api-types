import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CraftingRecipe$CraftingBookInfo } from '../../../../net/minecraft/world/item/crafting/CraftingRecipe$CraftingBookInfo.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
export interface CustomCraftingRecipeBuilder$Factory extends BiFunction<Recipe$CommonInfo, CraftingRecipe$CraftingBookInfo, Recipe<Object>>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: Recipe<Object>) => V): (param0: Recipe$CommonInfo, param1: CraftingRecipe$CraftingBookInfo) => V;
}