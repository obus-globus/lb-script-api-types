import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { AbstractCookingRecipe } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe.d.ts'
import type { AbstractCookingRecipe$CookingBookInfo } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$CookingBookInfo.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
export interface AbstractCookingRecipe$Factory<T extends AbstractCookingRecipe> extends Object{
    create(commonInfo: Recipe$CommonInfo, cbookInfotegory: AbstractCookingRecipe$CookingBookInfo, ingredient: Ingredient, result: ItemStackTemplate, experience: number, cookingTime: number): T;
}