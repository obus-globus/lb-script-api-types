import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export interface PBDataStructureFactory extends Object, DataStructureFactory{
    createPseudoBooleanConstraint(arg0: IVecInt, arg1: IVec<BigInteger>, arg2: boolean, arg3: BigInteger): Constr;
}