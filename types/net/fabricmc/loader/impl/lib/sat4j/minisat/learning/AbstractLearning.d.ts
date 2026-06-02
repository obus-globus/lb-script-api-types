import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { LearningStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/LearningStrategy.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
import type { VarActivityListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/VarActivityListener.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export abstract class AbstractLearning<D extends DataStructureFactory> extends Object implements LearningStrategy<D> {
    constructor()
    // private val: VarActivityListener;
    claBumpActivity(arg0: Constr): void;
    init(): void;
    setSolver(arg0: Solver<D>): void;
    setVarActivityListener(arg0: VarActivityListener): void;
}