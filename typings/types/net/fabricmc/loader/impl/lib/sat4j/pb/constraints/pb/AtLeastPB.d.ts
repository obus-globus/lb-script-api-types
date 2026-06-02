import type { BigInteger } from '../../../../../../../../../java/math/BigInteger.d.ts'
import type { AtLeast } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/card/AtLeast.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { PBConstr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/PBConstr.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export class AtLeastPB extends AtLeast implements PBConstr {
    static TAUTOLOGY: Constr;
    static atLeastNew(paramarg0: ILits, paramarg1: IVecInt, paramarg2: number): AtLeastPB;
    static atLeastNew(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt, paramarg3: number): PBConstr;
    private constructor(arg0: ILits, arg1: IVecInt, arg2: number)
    // private degree: BigInteger;
    // private learnt: boolean;
    assertConstraint(arg0: UnitPropagationListener): void;
    getVocabulary(): ILits;
    learnt(): boolean;
    setLearnt(): void;
}