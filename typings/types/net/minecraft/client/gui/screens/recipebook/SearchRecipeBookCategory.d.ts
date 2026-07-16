import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ExtendedRecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/ExtendedRecipeBookCategory.d.ts'
import type { RecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
export class SearchRecipeBookCategory extends Enum<SearchRecipeBookCategory> implements ExtendedRecipeBookCategory {
    static BLAST_FURNACE: SearchRecipeBookCategory;
    static CRAFTING: SearchRecipeBookCategory;
    static FURNACE: SearchRecipeBookCategory;
    static SMOKER: SearchRecipeBookCategory;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SearchRecipeBookCategory;
    static values(): SearchRecipeBookCategory[];
    private constructor(...includedCategories: RecipeBookCategory[])
    // private includedCategories: RecipeBookCategory[];
    includedCategories(): RecipeBookCategory[];
    name(): "CRAFTING" | "FURNACE" | "BLAST_FURNACE" | "SMOKER";
}