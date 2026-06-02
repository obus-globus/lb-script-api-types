import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConflictTimer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimer.d.ts'
import type { SearchParams } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/SearchParams.d.ts'
import type { SolverStats } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/SolverStats.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export interface RestartStrategy extends Serializable, Object, ConflictTimer{
    init(arg0: SearchParams, arg1: SolverStats): void;
    newLearnedClause(arg0: Constr, arg1: number): void;
    onBackjumpToRootLevel(): void;
    onRestart(): void;
    shouldRestart(): boolean;
}