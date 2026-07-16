import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RecipeBookType extends Enum<RecipeBookType> {
    static BLAST_FURNACE: RecipeBookType;
    static CRAFTING: RecipeBookType;
    static FURNACE: RecipeBookType;
    static SMOKER: RecipeBookType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RecipeBookType;
    static values(): RecipeBookType[];
    private constructor()
    name(): "CRAFTING" | "FURNACE" | "BLAST_FURNACE" | "SMOKER";
}