import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { IProblem } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IProblem.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export interface IOptimizationProblem extends Object, IProblem{
    admitABetterSolution(arg0: IVecInt): boolean;
    discardCurrentSolution(): void;
    getObjectiveValue(): Number;
    hasNoObjectiveFunction(): boolean;
}