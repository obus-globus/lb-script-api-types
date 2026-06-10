import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { RecipeBuilder } from '../../../../net/minecraft/data/recipes/RecipeBuilder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { AbstractCookingRecipe } from '../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe.d.ts'
import type { AbstractCookingRecipe$CookingBookInfo } from '../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$CookingBookInfo.d.ts'
import type { AbstractCookingRecipe$Factory } from '../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$Factory.d.ts'
import type { CookingBookCategory } from '../../../../net/minecraft/world/item/crafting/CookingBookCategory.d.ts'
import type { CraftingBookCategory } from '../../../../net/minecraft/world/item/crafting/CraftingBookCategory.d.ts'
import type { CraftingRecipe$CraftingBookInfo } from '../../../../net/minecraft/world/item/crafting/CraftingRecipe$CraftingBookInfo.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export class SimpleCookingRecipeBuilder extends Object implements RecipeBuilder {
    static ROOT_RECIPE_ADVANCEMENT: Identifier;
    static blasting(paramingredient: Ingredient, paramcraftingCategory: RecipeCategory, paramcookingCategory: CookingBookCategory, paramresult: ItemLike, paramexperience: number, paramcookingTime: number): SimpleCookingRecipeBuilder;
    static campfireCooking(paramingredient: Ingredient, paramcraftingCategory: RecipeCategory, paramresult: ItemLike, paramexperience: number, paramcookingTime: number): SimpleCookingRecipeBuilder;
    static createCraftingBookInfo(paramcategory: RecipeCategory, paramgroup: string): CraftingRecipe$CraftingBookInfo;
    static createCraftingCommonInfo(paramshowNotification: boolean): Recipe$CommonInfo;
    static determineCraftingBookCategory(paramcategory: RecipeCategory): CraftingBookCategory;
    static generic(paramingredient: Ingredient, paramcraftingCategory: RecipeCategory, paramcookingCategory: CookingBookCategory, paramresult: ItemLike, paramexperience: number, paramcookingTime: number, paramfactory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => AbstractCookingRecipe | null): SimpleCookingRecipeBuilder;
    static getDefaultRecipeId(paramresult: ItemInstance): ResourceKey<Recipe<Object>>;
    static smelting(paramingredient: Ingredient, paramcraftingCategory: RecipeCategory, paramcookingCategory: CookingBookCategory, paramresult: ItemLike, paramexperience: number, paramcookingTime: number): SimpleCookingRecipeBuilder;
    static smoking(paramingredient: Ingredient, paramcraftingCategory: RecipeCategory, paramresult: ItemLike, paramexperience: number, paramcookingTime: number): SimpleCookingRecipeBuilder;
    private constructor(craftingCategory: RecipeCategory, cookingCategory: CookingBookCategory, result: ItemStackTemplate, ingredient: Ingredient, experience: number, cookingTime: number, factory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => AbstractCookingRecipe | null)
    private constructor(craftingCategory: RecipeCategory, cookingCategory: CookingBookCategory, result: ItemLike, ingredient: Ingredient, experience: number, cookingTime: number, factory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => AbstractCookingRecipe | null)
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private cookingCategory: CookingBookCategory;
    // private cookingTime: number;
    // private craftingCategory: RecipeCategory;
    // private experience: number;
    // private factory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => AbstractCookingRecipe | null;
    // private group: string;
    // private ingredient: Ingredient;
    // private result: ItemStackTemplate;
    defaultId(): ResourceKey<Recipe<Object>>;
    group(group: string): SimpleCookingRecipeBuilder;
    save(output: RecipeOutput): void;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<Object>>): void;
    unlockedBy(name: string, criterion: Criterion<Object>): SimpleCookingRecipeBuilder;
}