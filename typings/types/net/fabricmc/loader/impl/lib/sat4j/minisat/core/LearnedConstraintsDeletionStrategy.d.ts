import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConflictTimer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimer.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
export interface LearnedConstraintsDeletionStrategy extends Serializable, Object{
    getTimer(): ConflictTimer;
    init(): void;
    onClauseLearning(arg0: Constr): void;
    onConflictAnalysis(arg0: Constr): void;
    onPropagation(arg0: Constr, arg1: number): void;
    reduce(arg0: IVec<Constr>): void;
}