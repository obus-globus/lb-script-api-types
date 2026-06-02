import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { RecipeBook } from '../../../net/minecraft/stats/RecipeBook.d.ts'
import type { ServerRecipeBook$DisplayResolver } from '../../../net/minecraft/stats/ServerRecipeBook$DisplayResolver.d.ts'
import type { ServerRecipeBook$Packed } from '../../../net/minecraft/stats/ServerRecipeBook$Packed.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeDisplayEntry } from '../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
export class ServerRecipeBook extends RecipeBook {
    static RECIPE_BOOK_TAG: string;
    constructor(displayResolver: (param0: ResourceKey<Object>, param1: (param0: RecipeDisplayEntry) => void) => void)
    // private displayResolver: (param0: ResourceKey<Object>, param1: (param0: RecipeDisplayEntry) => void) => void;
    // private highlight: ResourceKey<Recipe<Object>>[];
    // private known: ResourceKey<Recipe<Object>>[];
    add(id: ResourceKey<Recipe<Object>>): void;
    // private addHighlight(id: ResourceKey<Recipe<Object>>): void;
    addRecipes(recipes: E[], player: ServerPlayer): number;
    // private apply(packed: ServerRecipeBook$Packed): void;
    contains(id: ResourceKey<Recipe<Object>>): boolean;
    copyOverData(bookToCopy: ServerRecipeBook): void;
    // private loadRecipes(recipes: ResourceKey<Recipe<Object>>[], recipeAddingMethod: (param0: ResourceKey<Recipe<Object>>) => void, validator: (param0: ResourceKey<Recipe<Object>>) => kotlin.Boolean): void;
    loadUntrusted(packed: ServerRecipeBook$Packed, validator: (param0: ResourceKey<Recipe<Object>>) => kotlin.Boolean): void;
    pack(): ServerRecipeBook$Packed;
    remove(id: ResourceKey<Recipe<Object>>): void;
    removeHighlight(id: ResourceKey<Recipe<Object>>): void;
    removeRecipes(recipes: E[], player: ServerPlayer): number;
    sendInitialRecipeBook(player: ServerPlayer): void;
}