import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AdvancementVisibilityEvaluator$VisibilityRule extends Enum<AdvancementVisibilityEvaluator$VisibilityRule> {
    static HIDE: AdvancementVisibilityEvaluator$VisibilityRule;
    static NO_CHANGE: AdvancementVisibilityEvaluator$VisibilityRule;
    static SHOW: AdvancementVisibilityEvaluator$VisibilityRule;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AdvancementVisibilityEvaluator$VisibilityRule;
    static values(): AdvancementVisibilityEvaluator$VisibilityRule[];
    private constructor()
    name(): "SHOW" | "HIDE" | "NO_CHANGE";
}