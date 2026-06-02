import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export abstract class Clauses extends Object {
    static sanityCheck(paramarg0: IVecInt, paramarg1: ILits, paramarg2: UnitPropagationListener): IVecInt;
}