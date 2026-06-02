import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { PBContainer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/PBContainer.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export interface AbstractPBDataStructureFactory$INormalizer extends Object{
    nice(arg0: IVecInt, arg1: IVec<BigInteger>, arg2: boolean, arg3: BigInteger, arg4: ILits): PBContainer;
}