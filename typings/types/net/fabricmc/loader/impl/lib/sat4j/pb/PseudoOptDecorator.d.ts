import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { IPBSolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/IPBSolver.d.ts'
import type { ObjectiveFunction } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
import type { PBSolverDecorator } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/PBSolverDecorator.d.ts'
import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { IOptimizationProblem } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IOptimizationProblem.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export class PseudoOptDecorator extends PBSolverDecorator implements IOptimizationProblem {
    constructor(arg0: IPBSolver)
    constructor(arg0: IPBSolver, arg1: boolean)
    constructor(arg0: IPBSolver, arg1: boolean, arg2: boolean)
    // private isSolutionOptimal: boolean;
    // private nonOptimalMeansSatisfiable: boolean;
    objectiveValue: BigInteger;
    // private optimizationTimeout: number;
    // private prevModelBlockingClause: IVecInt;
    // private prevfullmodel: boolean[];
    // private previousPBConstr: IConstr;
    // private prevmodel: number[];
    // private prevmodelwithadditionalvars: number[];
    // private solverTimeout: number;
    // private useAnImplicantForEvaluation: boolean;
    admitABetterSolution(arg0: IVecInt): boolean;
    calculateObjective(): Number;
    discardCurrentSolution(): void;
    getObjectiveValue(): Number;
    hasNoObjectiveFunction(): boolean;
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
    model(): number[];
    model(arg0: number): boolean;
    // private modelWithAdaptedNonPrimeLiterals(): number[];
    modelWithInternalVariables(): number[];
    reset(): void;
    setObjectiveFunction(arg0: ObjectiveFunction): void;
    setTimeout(arg0: number): void;
}