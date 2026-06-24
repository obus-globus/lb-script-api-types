import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class SmithingTransformRecipeBuilder extends Object {
    static smithing(paramtemplate: Ingredient, parambase: Ingredient, paramaddition: Ingredient, paramcategory: RecipeCategory, paramresult: Item): SmithingTransformRecipeBuilder;
    constructor(template: Ingredient, base: Ingredient, addition: Ingredient, category: RecipeCategory, result: ItemStackTemplate)
    // private addition: Ingredient;
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private base: Ingredient;
    // private category: RecipeCategory;
    // private result: ItemStackTemplate;
    // private template: Ingredient;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<any>>): void;
    unlocks(name: string, criterion: Criterion<any>): SmithingTransformRecipeBuilder;
}