import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { CustomCraftingRecipeBuilder$Factory } from '../../../../net/minecraft/data/recipes/CustomCraftingRecipeBuilder$Factory.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { CraftingRecipe$CraftingBookInfo } from '../../../../net/minecraft/world/item/crafting/CraftingRecipe$CraftingBookInfo.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
export class CustomCraftingRecipeBuilder extends Object {
    static customCrafting(paramcategory: RecipeCategory, paramfactory: (param0: Recipe$CommonInfo, param1: CraftingRecipe$CraftingBookInfo) => Recipe<any>): CustomCraftingRecipeBuilder;
    constructor(category: RecipeCategory, factory: (param0: Recipe$CommonInfo, param1: CraftingRecipe$CraftingBookInfo) => Recipe<any>)
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private category: RecipeCategory;
    // private factory: (param0: Recipe$CommonInfo, param1: CraftingRecipe$CraftingBookInfo) => Recipe<any>;
    // private group: string;
    group(group: string): CustomCraftingRecipeBuilder;
    save(output: RecipeOutput, name: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<any>>): void;
    unlockedBy(name: string, criterion: Criterion<any>): CustomCraftingRecipeBuilder;
}