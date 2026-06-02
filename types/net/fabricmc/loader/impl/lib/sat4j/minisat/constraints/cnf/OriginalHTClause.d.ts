import type { HTClause } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/cnf/HTClause.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { MandatoryLiteralListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/MandatoryLiteralListener.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export class OriginalHTClause extends HTClause {
    static TAUTOLOGY: Constr;
    static brandNewClause(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt): OriginalHTClause;
    constructor(arg0: IVecInt, arg1: ILits)
    // private savedindexhead: number;
    // private savedindextail: number;
    incActivity(arg0: number): void;
    learnt(): boolean;
    propagate(arg0: UnitPropagationListener, arg1: number): boolean;
    propagatePI(arg0: MandatoryLiteralListener, arg1: number): boolean;
    register(): void;
    setActivity(arg0: number): void;
    setLearnt(): void;
}