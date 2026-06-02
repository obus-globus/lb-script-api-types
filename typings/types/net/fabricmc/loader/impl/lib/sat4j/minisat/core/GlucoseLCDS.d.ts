import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConflictTimer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimer.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { LearnedConstraintsDeletionStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/LearnedConstraintsDeletionStrategy.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
export class GlucoseLCDS<D extends DataStructureFactory> extends Object implements LearnedConstraintsDeletionStrategy {
    constructor(arg0: Solver<D>, arg1: ConflictTimer)
    // private flag: number;
    // private flags: number[];
    // private solver: Solver<D>;
    readonly timer: ConflictTimer;
    computeLBD(arg0: Constr, arg1: number): number;
    getSolver(): Solver<D>;
    getTimer(): ConflictTimer;
    init(): void;
    onClauseLearning(arg0: Constr): void;
    onConflictAnalysis(arg0: Constr): void;
    onPropagation(arg0: Constr, arg1: number): void;
    onRemove(arg0: Constr): void;
    reduce(arg0: IVec<Constr>): void;
    toString(): string;
}