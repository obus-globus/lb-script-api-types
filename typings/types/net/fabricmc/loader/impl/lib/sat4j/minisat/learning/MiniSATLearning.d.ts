import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
import type { AbstractLearning } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/learning/AbstractLearning.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export class MiniSATLearning<D extends DataStructureFactory> extends AbstractLearning<D> {
    constructor()
    // private dsf: DataStructureFactory;
    learns(arg0: Constr): void;
    setDataStructureFactory(arg0: DataStructureFactory): void;
    setSolver(arg0: Solver<D>): void;
    toString(): string;
}