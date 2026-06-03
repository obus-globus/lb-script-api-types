import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { RecipeBuilder } from '../../../../net/minecraft/data/recipes/RecipeBuilder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { CraftingBookCategory } from '../../../../net/minecraft/world/item/crafting/CraftingBookCategory.d.ts'
import type { CraftingRecipe$CraftingBookInfo } from '../../../../net/minecraft/world/item/crafting/CraftingRecipe$CraftingBookInfo.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export class ShapelessRecipeBuilder extends Object implements RecipeBuilder {
    static ROOT_RECIPE_ADVANCEMENT: Identifier;
    static createCraftingBookInfo(paramcategory: RecipeCategory, paramgroup: string): CraftingRecipe$CraftingBookInfo;
    static createCraftingCommonInfo(paramshowNotification: boolean): Recipe$CommonInfo;
    static determineCraftingBookCategory(paramcategory: RecipeCategory): CraftingBookCategory;
    static getDefaultRecipeId(paramresult: ItemInstance): ResourceKey<Object>;
    static shapeless(paramitems: HolderGetter<Item>, paramcategory: RecipeCategory, paramresult: ItemStackTemplate): ShapelessRecipeBuilder;
    static shapeless(paramitems: HolderGetter<Item>, paramcategory: RecipeCategory, paramitem: ItemLike): ShapelessRecipeBuilder;
    static shapeless(paramitems: HolderGetter<Item>, paramcategory: RecipeCategory, paramitem: ItemLike, paramcount: number): ShapelessRecipeBuilder;
    private constructor(items: HolderGetter<Item>, category: RecipeCategory, result: ItemStackTemplate)
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private category: RecipeCategory;
    // private group: string;
    // private ingredients: Ingredient[];
    // private items: HolderGetter<Item>;
    // private result: ItemStackTemplate;
    defaultId(): ResourceKey<Recipe<Object>>;
    group(group: string): ShapelessRecipeBuilder;
    requires(tag: TagKey<Item>): ShapelessRecipeBuilder;
    requires(ingredient: Ingredient): ShapelessRecipeBuilder;
    requires(ingredient: Ingredient, count: number): ShapelessRecipeBuilder;
    requires(item: ItemLike): ShapelessRecipeBuilder;
    requires(item: ItemLike, count: number): ShapelessRecipeBuilder;
    save(output: RecipeOutput): void;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput): void;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<Object>>): void;
    unlockedBy(name: string, criterion: Criterion<Object>): ShapelessRecipeBuilder;
}