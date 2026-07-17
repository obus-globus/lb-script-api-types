import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { RecipeBuilder } from '../../../../net/minecraft/data/recipes/RecipeBuilder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeUnlockAdvancementBuilder } from '../../../../net/minecraft/data/recipes/RecipeUnlockAdvancementBuilder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export class ShapedRecipeBuilder extends Object implements RecipeBuilder {
    static ROOT_RECIPE_ADVANCEMENT: Identifier;
    static shaped(paramitems: HolderGetter<Item>, paramcategory: RecipeCategory, paramitem: ItemLike): ShapedRecipeBuilder;
    static shaped(paramitems: HolderGetter<Item>, paramcategory: RecipeCategory, paramitem: ItemLike, paramcount: number): ShapedRecipeBuilder;
    private constructor(items: HolderGetter<Item>, category: RecipeCategory, result: ItemStackTemplate)
    private constructor(items: HolderGetter<Item>, category: RecipeCategory, result: ItemLike, count: number)
    // private advancementBuilder: RecipeUnlockAdvancementBuilder;
    // private category: RecipeCategory;
    // private group: string;
    // private items: HolderGetter<Item>;
    // private key: JavaMap<string, Ingredient>;
    // private result: ItemStackTemplate;
    // private rows: string[];
    // private showNotification: boolean;
    defaultId(): ResourceKey<Recipe<any>>;
    define(symbol: string, tag: TagKey<Item>): ShapedRecipeBuilder;
    define(symbol: string, ingredient: Ingredient): ShapedRecipeBuilder;
    define(symbol: string, item: ItemLike): ShapedRecipeBuilder;
    group(group: string): ShapedRecipeBuilder;
    pattern(row: string): ShapedRecipeBuilder;
    save(output: RecipeOutput): void;
    save(output: RecipeOutput, id: string): void;
    save(output: RecipeOutput, id: ResourceKey<Recipe<any>>): void;
    showNotification(showNotification: boolean): ShapedRecipeBuilder;
    unlockedBy(name: string, criterion: Criterion<any>): ShapedRecipeBuilder;
}