import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class RecipeUnlockingRequirement_UnlockingContext extends Enum<RecipeUnlockingRequirement_UnlockingContext> {
    static AlwaysUnlocked: RecipeUnlockingRequirement_UnlockingContext;
    static None: RecipeUnlockingRequirement_UnlockingContext;
    static PlayerHasManyItems: RecipeUnlockingRequirement_UnlockingContext;
    static PlayerInWater: RecipeUnlockingRequirement_UnlockingContext;
    static getByName(paramarg0: string): RecipeUnlockingRequirement_UnlockingContext;
    static getByName(paramarg0: string, paramarg1: RecipeUnlockingRequirement_UnlockingContext): RecipeUnlockingRequirement_UnlockingContext;
    static getByValue(paramarg0: number): RecipeUnlockingRequirement_UnlockingContext;
    static getByValue(paramarg0: number, paramarg1: RecipeUnlockingRequirement_UnlockingContext): RecipeUnlockingRequirement_UnlockingContext;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RecipeUnlockingRequirement_UnlockingContext;
    static values(): RecipeUnlockingRequirement_UnlockingContext[];
    private constructor(arg2: number)
    private constructor(arg2: RecipeUnlockingRequirement_UnlockingContext)
    readonly value: number;
    getValue(): number;
    name(): "None" | "AlwaysUnlocked" | "PlayerInWater" | "PlayerHasManyItems";
}