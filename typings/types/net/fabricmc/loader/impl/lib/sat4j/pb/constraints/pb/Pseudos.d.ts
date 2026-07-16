import type { BigInteger } from '../../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { IDataStructurePB } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/IDataStructurePB.d.ts'
import type { IVec } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export abstract class Pseudos extends Object {
    static niceCheckedParameters(paramarg0: IVecInt, paramarg1: IVec<BigInteger>, paramarg2: boolean, paramarg3: BigInteger, paramarg4: ILits): IDataStructurePB;
    static niceCheckedParametersForCompetition(paramarg0: number[], paramarg1: BigInteger[], paramarg2: boolean, paramarg3: BigInteger): BigInteger;
    static niceParameters(paramarg0: IVecInt, paramarg1: IVec<BigInteger>, paramarg2: boolean, paramarg3: BigInteger, paramarg4: ILits): IDataStructurePB;
    static niceParametersForCompetition(paramarg0: number[], paramarg1: BigInteger[], paramarg2: boolean, paramarg3: BigInteger): BigInteger;
    constructor()
}