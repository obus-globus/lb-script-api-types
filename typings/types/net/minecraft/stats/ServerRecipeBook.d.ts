import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { RecipeBook } from '../../../net/minecraft/stats/RecipeBook.d.ts'
import type { ServerRecipeBook$DisplayResolver } from '../../../net/minecraft/stats/ServerRecipeBook$DisplayResolver.d.ts'
import type { ServerRecipeBook$Packed } from '../../../net/minecraft/stats/ServerRecipeBook$Packed.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeDisplayEntry } from '../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
export class ServerRecipeBook extends RecipeBook {
    static RECIPE_BOOK_TAG: string;
    constructor(displayResolver: (param0: ResourceKey<Recipe<any>>, param1: (param0: RecipeDisplayEntry) => void) => void)
    // private displayResolver: (param0: ResourceKey<Recipe<any>>, param1: (param0: RecipeDisplayEntry) => void) => void;
    // private highlight: ResourceKey<Recipe<any>>[];
    // private known: ResourceKey<Recipe<any>>[];
    add(id: ResourceKey<Recipe<any>>): void;
    // private addHighlight(id: ResourceKey<Recipe<any>>): void;
    addRecipes(recipes: RecipeHolder<any>[], player: ServerPlayer): number;
    // private apply(packed: ServerRecipeBook$Packed): void;
    contains(id: ResourceKey<Recipe<any>>): boolean;
    copyOverData(bookToCopy: ServerRecipeBook): void;
    // private loadRecipes(recipes: ResourceKey<Recipe<any>>[], recipeAddingMethod: (param0: ResourceKey<Recipe<any>>) => void, validator: (param0: ResourceKey<Recipe<any>>) => boolean): void;
    loadUntrusted(packed: ServerRecipeBook$Packed, validator: (param0: ResourceKey<Recipe<any>>) => boolean): void;
    pack(): ServerRecipeBook$Packed;
    remove(id: ResourceKey<Recipe<any>>): void;
    removeHighlight(id: ResourceKey<Recipe<any>>): void;
    removeRecipes(recipes: RecipeHolder<any>[], player: ServerPlayer): number;
    sendInitialRecipeBook(player: ServerPlayer): void;
}