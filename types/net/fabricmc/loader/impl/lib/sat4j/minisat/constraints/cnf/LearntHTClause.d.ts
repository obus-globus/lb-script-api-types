import type { HTClause } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/cnf/HTClause.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { MandatoryLiteralListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/MandatoryLiteralListener.d.ts'
export class LearntHTClause extends HTClause {
    static TAUTOLOGY: Constr;
    constructor(arg0: IVecInt, arg1: ILits)
    incActivity(arg0: number): void;
    learnt(): boolean;
    propagatePI(arg0: MandatoryLiteralListener, arg1: number): boolean;
    register(): void;
    setActivity(arg0: number): void;
    setLearnt(): void;
}