import type { ASolverFactory } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/core/ASolverFactory.d.ts'
import type { IPBSolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/IPBSolver.d.ts'
import type { PBDataStructureFactory } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/core/PBDataStructureFactory.d.ts'
import type { PBSolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/core/PBSolver.d.ts'
import type { PBSolverResolution } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/core/PBSolverResolution.d.ts'
export class SolverFactory extends ASolverFactory<IPBSolver> {
    static newCompetPBResLongWLMixedConstraintsObjectiveExpSimp(): PBSolverResolution;
    static newCompetPBResMixedConstraintsObjectiveExpSimp(paramarg0: PBDataStructureFactory): PBSolverResolution;
    static newDefault(): PBSolver;
    static newDefaultOptimizer(): IPBSolver;
    static newResolutionGlucose(): PBSolverResolution;
    static newResolutionGlucose21(): PBSolverResolution;
    private constructor()
}