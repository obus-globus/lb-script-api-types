import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RecipeCategory extends Enum<RecipeCategory> {
    static BREWING: RecipeCategory;
    static BUILDING_BLOCKS: RecipeCategory;
    static COMBAT: RecipeCategory;
    static DECORATIONS: RecipeCategory;
    static FOOD: RecipeCategory;
    static MISC: RecipeCategory;
    static REDSTONE: RecipeCategory;
    static TOOLS: RecipeCategory;
    static TRANSPORTATION: RecipeCategory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RecipeCategory;
    static values(): RecipeCategory[];
    private constructor(recipeFolderName: string)
    // private recipeFolderName: string;
    getFolderName(): string;
    name(): "BUILDING_BLOCKS" | "DECORATIONS" | "REDSTONE" | "TRANSPORTATION" | "TOOLS" | "COMBAT" | "FOOD" | "BREWING" | "MISC";
}