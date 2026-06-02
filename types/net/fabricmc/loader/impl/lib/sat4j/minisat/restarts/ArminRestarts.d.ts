import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RestartStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/RestartStrategy.d.ts'
import type { SearchParams } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/SearchParams.d.ts'
import type { SolverStats } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/SolverStats.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export class ArminRestarts extends Object implements RestartStrategy {
    constructor()
    // private conflictcount: number;
    // private conflicts: number;
    // private inner: number;
    // private outer: number;
    // private params: SearchParams;
    init(arg0: SearchParams, arg1: SolverStats): void;
    newConflict(): void;
    newLearnedClause(arg0: Constr, arg1: number): void;
    onBackjumpToRootLevel(): void;
    onRestart(): void;
    reset(): void;
    shouldRestart(): boolean;
    toString(): string;
}