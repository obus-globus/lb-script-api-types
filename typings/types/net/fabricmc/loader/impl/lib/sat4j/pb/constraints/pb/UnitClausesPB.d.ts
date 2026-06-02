import type { UnitClauses } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/cnf/UnitClauses.d.ts'
import type { PBConstr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/PBConstr.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export class UnitClausesPB extends UnitClauses implements PBConstr {
    static TAUTOLOGY: Constr;
    constructor(arg0: IVecInt)
}