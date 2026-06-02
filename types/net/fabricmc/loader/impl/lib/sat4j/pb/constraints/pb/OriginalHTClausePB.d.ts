import type { OriginalHTClause } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/cnf/OriginalHTClause.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { PBConstr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/PBConstr.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export class OriginalHTClausePB extends OriginalHTClause implements PBConstr {
    static TAUTOLOGY: Constr;
    static brandNewClause(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt): OriginalHTClause;
    static brandNewClause(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt): OriginalHTClausePB;
    constructor(arg0: IVecInt, arg1: ILits)
}