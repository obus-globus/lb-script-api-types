import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RecipeBookType extends Enum<RecipeBookType> {
    static BLAST_FURNACE: RecipeBookType;
    static CRAFTING: RecipeBookType;
    static FURNACE: RecipeBookType;
    static SMOKER: RecipeBookType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RecipeBookType;
    static values(): (Object | null)[];
    private constructor()
    name(): "CRAFTING" | "FURNACE" | "BLAST_FURNACE" | "SMOKER";
}