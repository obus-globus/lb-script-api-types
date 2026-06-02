import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RecipeCollection$CraftableStatus extends Enum<RecipeCollection$CraftableStatus> {
    static ANY: RecipeCollection$CraftableStatus;
    static CRAFTABLE: RecipeCollection$CraftableStatus;
    static NOT_CRAFTABLE: RecipeCollection$CraftableStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RecipeCollection$CraftableStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "ANY" | "CRAFTABLE" | "NOT_CRAFTABLE";
}