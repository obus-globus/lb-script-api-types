import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export interface IClauseConstructor extends Object{
    constructClause(arg0: UnitPropagationListener, arg1: ILits, arg2: IVecInt): Constr;
    constructLearntClause(arg0: ILits, arg1: IVecInt): Constr;
}