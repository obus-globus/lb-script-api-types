import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ExtendedRecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/ExtendedRecipeBookCategory.d.ts'
import type { RecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
export class SearchRecipeBookCategory extends Enum<SearchRecipeBookCategory> implements ExtendedRecipeBookCategory {
    static BLAST_FURNACE: SearchRecipeBookCategory;
    static CRAFTING: SearchRecipeBookCategory;
    static FURNACE: SearchRecipeBookCategory;
    static SMOKER: SearchRecipeBookCategory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SearchRecipeBookCategory;
    static values(): (Object | null)[];
    private constructor(includedCategories: RecipeBookCategory[])
    // private includedCategories: RecipeBookCategory[];
    includedCategories(): RecipeBookCategory[];
    name(): "CRAFTING" | "FURNACE" | "BLAST_FURNACE" | "SMOKER";
}