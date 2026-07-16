import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RecipeCollection$CraftableStatus extends Enum<RecipeCollection$CraftableStatus> {
    static ANY: RecipeCollection$CraftableStatus;
    static CRAFTABLE: RecipeCollection$CraftableStatus;
    static NOT_CRAFTABLE: RecipeCollection$CraftableStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RecipeCollection$CraftableStatus;
    static values(): RecipeCollection$CraftableStatus[];
    private constructor()
    name(): "ANY" | "CRAFTABLE" | "NOT_CRAFTABLE";
}