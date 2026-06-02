import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { SingleItemRecipe } from '../../../../../net/minecraft/world/item/crafting/SingleItemRecipe.d.ts'
export interface SingleItemRecipe$Factory<T extends SingleItemRecipe> extends Object{
    create(commonInfo: Recipe$CommonInfo, ingredient: Ingredient, result: ItemStackTemplate): T;
}