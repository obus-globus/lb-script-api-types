import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { IPBSolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/IPBSolver.d.ts'
import type { ObjectiveFunction } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { IVec } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { SolverDecorator } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/SolverDecorator.d.ts'
export class PBSolverDecorator extends SolverDecorator<IPBSolver> implements IPBSolver {
    constructor(arg0: IPBSolver)
    addAtLeast(arg0: IVecInt, arg1: IVecInt, arg2: number): IConstr;
    addAtMost(arg0: IVecInt, arg1: number): IConstr;
    addAtMost(arg0: IVecInt, arg1: IVecInt, arg2: number): IConstr;
    addPseudoBoolean(arg0: IVecInt, arg1: IVec<BigInteger>, arg2: boolean, arg3: BigInteger): IConstr;
    getObjectiveFunction(): ObjectiveFunction;
    setObjectiveFunction(arg0: ObjectiveFunction): void;
}