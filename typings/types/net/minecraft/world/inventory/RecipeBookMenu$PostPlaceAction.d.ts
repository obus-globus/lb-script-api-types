import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RecipeBookMenu$PostPlaceAction extends Enum<RecipeBookMenu$PostPlaceAction> {
    static NOTHING: RecipeBookMenu$PostPlaceAction;
    static PLACE_GHOST_RECIPE: RecipeBookMenu$PostPlaceAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RecipeBookMenu$PostPlaceAction;
    static values(): RecipeBookMenu$PostPlaceAction[];
    private constructor()
    name(): "NOTHING" | "PLACE_GHOST_RECIPE";
}