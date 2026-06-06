import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleAutoCrafter$RecipeBookMenuType$Companion } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoCrafter$RecipeBookMenuType$Companion.d.ts'
import type { SearchRecipeBookCategory } from '../../../../../../../net/minecraft/client/gui/screens/recipebook/SearchRecipeBookCategory.d.ts'
import type { RecipeBookType } from '../../../../../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
export class ModuleAutoCrafter$RecipeBookMenuType extends Enum<ModuleAutoCrafter$RecipeBookMenuType> implements Tagged {
    static BLAST_FURNACE: ModuleAutoCrafter$RecipeBookMenuType;
    static CRAFTING_TABLE: ModuleAutoCrafter$RecipeBookMenuType;
    static Companion: Tagged$Companion;
    static Companion: ModuleAutoCrafter$RecipeBookMenuType$Companion;
    static FURNACE: ModuleAutoCrafter$RecipeBookMenuType;
    static INVENTORY: ModuleAutoCrafter$RecipeBookMenuType;
    static SMOKER: ModuleAutoCrafter$RecipeBookMenuType;
    static getEntries(): ModuleAutoCrafter$RecipeBookMenuType[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoCrafter$RecipeBookMenuType;
    static values(): (Object | null)[];
    private constructor(tag: string, recipeBookType: RecipeBookType, searchCategory: SearchRecipeBookCategory)
    readonly recipeBookType: RecipeBookType;
    readonly searchCategory: SearchRecipeBookCategory;
    readonly tag: string;
    name(): "INVENTORY" | "CRAFTING_TABLE" | "FURNACE" | "BLAST_FURNACE" | "SMOKER";
}