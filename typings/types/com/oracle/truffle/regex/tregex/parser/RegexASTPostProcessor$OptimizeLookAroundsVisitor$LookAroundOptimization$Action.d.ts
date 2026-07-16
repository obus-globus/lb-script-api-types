import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization$Action extends Enum<RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization$Action> {
    static NONE: RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization$Action;
    static NO_OP: RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization$Action;
    static REPLACE: RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization$Action;
    static values(): RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization$Action[];
    private constructor()
    name(): "NONE" | "NO_OP" | "REPLACE";
}