import type { OriginalBinaryClause } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/cnf/OriginalBinaryClause.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { PBConstr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/PBConstr.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export class OriginalBinaryClausePB extends OriginalBinaryClause implements PBConstr {
    static TAUTOLOGY: Constr;
    static brandNewClause(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt): OriginalBinaryClause;
    static brandNewClause(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt): OriginalBinaryClausePB;
    constructor(arg0: IVecInt, arg1: ILits)
}