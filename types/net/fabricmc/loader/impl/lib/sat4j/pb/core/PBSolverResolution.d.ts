import type { IOrder } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IOrder.d.ts'
import type { ISimplifier } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ISimplifier.d.ts'
import type { LearningStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/LearningStrategy.d.ts'
import type { RestartStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/RestartStrategy.d.ts'
import type { PBDataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/core/PBDataStructureFactory.d.ts'
import type { PBSolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/core/PBSolver.d.ts'
export class PBSolverResolution extends PBSolver {
    static NO_SIMPLIFICATION: ISimplifier;
    constructor(arg0: LearningStrategy<PBDataStructureFactory>, arg1: PBDataStructureFactory, arg2: IOrder, arg3: RestartStrategy)
}