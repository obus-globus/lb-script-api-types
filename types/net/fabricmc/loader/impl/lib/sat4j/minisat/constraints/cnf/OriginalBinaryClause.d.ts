import type { BinaryClause } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/cnf/BinaryClause.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export class OriginalBinaryClause extends BinaryClause {
    static TAUTOLOGY: Constr;
    static brandNewClause(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt): OriginalBinaryClause;
    constructor(arg0: IVecInt, arg1: ILits)
    incActivity(arg0: number): void;
    learnt(): boolean;
    setActivity(arg0: number): void;
    setLearnt(): void;
}