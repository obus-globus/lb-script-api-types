import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { RecipeBuilder } from '../../../../net/minecraft/data/recipes/RecipeBuilder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { CraftingBookCategory } from '../../../../net/minecraft/world/item/crafting/CraftingBookCategory.d.ts'
import type { CraftingRecipe$CraftingBookInfo } from '../../../../net/minecraft/world/item/crafting/CraftingRecipe$CraftingBookInfo.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
export class TransmuteRecipeBuilder extends Object implements RecipeBuilder {
    static ROOT_RECIPE_ADVANCEMENT: Identifier;
    static createCraftingBookInfo(paramcategory: RecipeCategory, paramgroup: string): CraftingRecipe$CraftingBookInfo;
    static createCraftingCommonInfo(paramshowNotification: boolean): Recipe$CommonInfo;
    static determineCraftingBookCategory(paramcategory: RecipeCategory): CraftingBookCategory;
    static getDefaultRecipeId(paramresult: ItemInstance): ResourceKey<Recipe<any>>;
    static transmute(paramcategory: RecipeCategory, paraminput: Ingredient, parammaterial: Ingredient, paramresult: Item): TransmuteRecipeBuilder;
    static transmute(paramcategory: RecipeCategory, paraminput: Ingredient, parammaterial: Ingredient, paramresult: ItemStackTemplate): TransmuteRecipeBuilder;
    private constructor(category: RecipeCategory, result: ItemStackTemplate, input: Ingredient, material: Ingredient)
    // private addMaterialCountToOutput: boolean;
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private category: RecipeCategory;
    // private group: string;
    // private input: Ingredient;
    // private material: Ingredient;
    // private materialCount: MinMaxBounds$Ints;
    // private result: ItemStackTemplate;
    addMaterialCountToOutput(): TransmuteRecipeBuilder;
    defaultId(): ResourceKey<Recipe<any>>;
    group(group: string): TransmuteRecipeBuilder;
    save(output: RecipeOutput): void;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<any>>): void;
    setMaterialCount(materialCount: MinMaxBounds$Ints): TransmuteRecipeBuilder;
    unlockedBy(name: string, criterion: Criterion<any>): TransmuteRecipeBuilder;
}