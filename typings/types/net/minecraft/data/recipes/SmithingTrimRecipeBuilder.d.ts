import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { TrimPattern } from '../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
export class SmithingTrimRecipeBuilder extends Object {
    static smithingTrim(paramtemplate: Ingredient, parambase: Ingredient, paramaddition: Ingredient, parampattern: Holder<TrimPattern>, paramcategory: RecipeCategory): SmithingTrimRecipeBuilder;
    constructor(category: RecipeCategory, template: Ingredient, base: Ingredient, addition: Ingredient, pattern: Holder<TrimPattern>)
    // private addition: Ingredient;
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private base: Ingredient;
    // private category: RecipeCategory;
    // private pattern: Holder<TrimPattern>;
    // private template: Ingredient;
    save(output: RecipeOutput, id: ResourceKey<Recipe<Object>>): void;
    unlocks(name: string, criterion: Criterion<Object>): SmithingTrimRecipeBuilder;
}