import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { RecipeBuilder } from '../../../../net/minecraft/data/recipes/RecipeBuilder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { SingleItemRecipe } from '../../../../net/minecraft/world/item/crafting/SingleItemRecipe.d.ts'
import type { SingleItemRecipe$Factory } from '../../../../net/minecraft/world/item/crafting/SingleItemRecipe$Factory.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export class SingleItemRecipeBuilder extends Object implements RecipeBuilder {
    static ROOT_RECIPE_ADVANCEMENT: Identifier;
    static stonecutting(paramingredient: Ingredient, paramcategory: RecipeCategory, paramresult: ItemLike, paramcount: number): SingleItemRecipeBuilder;
    constructor(category: RecipeCategory, factory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null, ingredient: Ingredient, result: ItemLike, count: number)
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private category: RecipeCategory;
    // private factory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null;
    // private ingredient: Ingredient;
    // private result: ItemStackTemplate;
    defaultId(): ResourceKey<Recipe<any>>;
    group(group: string): SingleItemRecipeBuilder;
    save(output: RecipeOutput): void;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<any>>): void;
    unlockedBy(name: string, criterion: Criterion<any>): SingleItemRecipeBuilder;
}